class Spell {
    constructor(baseDamage, scalingDamage, spellSlot, aoe) {
        this.baseDamage = baseDamage;
        this.scalingDamage = scalingDamage;
        this.spellSlot = spellSlot;
        this.aoe = aoe;
    }

    calcDamage(spellSlotUsed, currentRound) {
        return Math.floor(this.baseDamage + (spellSlotUsed - this.spellSlot) * this.scalingDamage) * (this.aoe ? 2 : 1);
    }

    calcDamageByRound(spellSlotUsed, round) {
        if (round == 0) return this.calcDamage(spellSlotUsed);
        return 0
    }
}

class Cantrip extends Spell {
    constructor(baseDamage, scalingDamage, aoe) {
        super(baseDamage, scalingDamage, 0, aoe);
    }

    calcDamage(spellSlotUsed, currentRound) {
        return Math.floor(this.baseDamage + this.scalingDamage * getSpellCasterLevelModification()) * (this.aoe ? 2 : 1);
    }
}

class ComplexSpell extends Spell {
    constructor(spellSlot, damageFormula) {
        super(0, 0, spellSlot, false);
        this.damageFormula = damageFormula;
    }

    calcDamage(spellSlotUsed, currentRound) {
        return this.damageFormula(spellSlotUsed)
    }
}

class DoTSpell extends Spell {
    constructor(spellSlot, round0, round1, round2) {
        super(0, 0, spellSlot, false);
        if (round2 === undefined) round2 =  new Spell(0, 0, 0, false)
        this.spells = [round0, round1, round2]
    }


    calcDamage(spellSlotUsed, currentRound) {
        let damage = 0;
        for (var i = 0; i < 3-currentRound; i++) {
            damage += this.spells[i].calcDamage(spellSlotUsed, null);
          }
        return damage;
    }

    calcDamageByRound(spellSlotUsed, round) {
        if (round > 2 || round < 0) return 0;
        return this.spells[round].calcDamage(spellSlotUsed, null)
    }
}

Map.prototype.addSpells = function() {
    return addSpellsToMap(this, document.getElementById('wotc').checked, document.getElementById('wc5e').checked, document.getElementById('coa').checked);
}

function getSpellCasterLevelModification() {
    let casterLevel = parseInt(document.getElementById('scl').value);
    return Math.floor((casterLevel+1)/6);    
}

let spellMap = null;
let select = null;

function calculateSpellList(clickedCheckbox) {
    if (document.getElementById(clickedCheckbox).checked) {
        if (clickedCheckbox == 'coa') {
            document.getElementById('wc5e').checked = false
        }
        else if (clickedCheckbox == 'wc5e') {
            document.getElementById('coa').checked = false
        }
    }
    let selectedSpells = select?.selected();
    updateSpellsInSelect()
    if (selectedSpells)
        select.set(selectedSpells);
    calculateSpellDamage()
    Calculate()
}

function spellListSelect() {
    spellArray = Array.from(spellMap.keys(), x => {return {value: x, text: x}});
    return [
        { label: 'Cantrips', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 0) },
        { label: 'Level 1', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 1) },
        { label: 'Level 2', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 2) },
        { label: 'Level 3', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 3) },
        { label: 'Level 4', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 4) },
        { label: 'Level 5', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 5) },
        { label: 'Level 6', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 6) },
        { label: 'Level 7', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 7) },
        { label: 'Level 8', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 8) },
        { label: 'Level 9', options: spellArray.filter(spellName => spellMap.get(spellName.text).spellSlot == 9) },
];
}

function addSpellsToSelect() {
    spellMap = new Map().addSpells();
    select = new SlimSelect({
        select: '#spellsSelect',
        data: spellListSelect(),
        onChange: function() {calculateSpellDamage();}
    });
}

function updateSpellsInSelect() {
    spellMap = new Map().addSpells();
    select.setData(spellListSelect());
}

function setSpellDamage(dmgArray, spellArray) {
    document.getElementById("spellDmg1").innerHTML = dmgArray[0];
    document.getElementById("spellDmg2").innerHTML = dmgArray[1];
    document.getElementById("spellDmg3").innerHTML = dmgArray[2];
    document.getElementById("spellUsed1").innerHTML = spellArray[0];
    document.getElementById("spellUsed2").innerHTML = spellArray[1];
    document.getElementById("spellUsed3").innerHTML = spellArray[2];
    history.pushState({},"WC5e CR Calculator","?" + generateUrl());
}

function calculateSpellDamage() {
    let spellSlots = [parseInt(document.getElementById("ss1").value), parseInt(document.getElementById("ss2").value), parseInt(document.getElementById("ss3").value)];
    if (!select) return setSpellDamage([0,0,0],["","",""]);
    let spells = select.selected();
    if (spells.length == 0) return setSpellDamage([0,0,0],["","",""]);
    let dmgArray = [0, 0, 0];
    let usedArray = ["", "", ""];
    for (var i = 0; i < 3; i++) {
        let dmg = 0;
        let spellUsed = "";
        spells.forEach(spellName => {
            let spell = spellMap.get(spellName);
            if (spell.spellSlot <= spellSlots[i] && (spelldmg = spell.calcDamage(spellSlots[i], i)) > dmg) {
                dmg = spelldmg;
                spellUsed = spellName;
            }
        });
        let spell = spellMap.get(spellUsed)

        for (var j = 0; j < 3-i; j++) {
            if ((spellDamage = spell.calcDamageByRound(spellSlots[i], j)) > 0) {
                dmgArray[i+j] += spellDamage;
                usedArray[i+j] = `${spellUsed} (${((j == 0) ? "" : "DoT, ")}${spellDamage})${((usedArray[i+j] == "") ? "" : " + ")}${usedArray[i+j]}`;
            }
        }
    }
    setSpellDamage(dmgArray, usedArray);
}

function transferDamage() {
    let rnd1 = document.getElementById("spellDmg1").innerHTML;
    let rnd2 = document.getElementById("spellDmg2").innerHTML;
    let rnd3 = document.getElementById("spellDmg3").innerHTML;
    document.getElementById("pDmg1").value = rnd1;
    document.getElementById("sDmg1").value = 0;
    document.getElementById("pDmg2").value = rnd2;
    document.getElementById("sDmg2").value = 0;
    document.getElementById("pDmg3").value = rnd3;
    document.getElementById("sDmg3").value = 0;
    document.getElementById("pDmg4").value = 0;
    document.getElementById("sDmg4").value = 0;
    document.getElementById("pDmg5").value = 0;
    document.getElementById("sDmg5").value = 0;
    document.getElementById("pDmg6").value = 0;
    document.getElementById("sDmg6").value = 0;
    Calculate();
    return false;
}
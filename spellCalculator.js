class Spell {
    constructor(baseDamage, scalingDamage, spellSlot, aoe) {
        this.baseDamage = baseDamage;
        this.scalingDamage = scalingDamage;
        this.spellSlot = spellSlot;
        this.aoe = aoe;
    }

    calcDamage(spellSlotUsed) {
        return Math.floor(this.baseDamage + (spellSlotUsed - this.spellSlot) * this.scalingDamage) * (this.aoe ? 2 : 1);
    }
}

class Cantrip extends Spell {
    constructor(baseDamage, scalingDamage, aoe) {
        super(baseDamage, scalingDamage, 0, aoe);
    }

    calcDamage(spellSlotUsed) {
        return Math.floor(this.baseDamage + this.scalingDamage * getSpellCasterLevelModification()) * (this.aoe ? 2 : 1);
    }
}

Object.defineProperty(Map.prototype, "addSpells", {
    value: function addSpells() {
        return addSpellsToMap(this);
    },
    writable: true,
    configurable: true
});

function getSpellCasterLevelModification() {
    let casterLevel = parseInt(document.getElementById("scl").value);
    return Math.floor((casterLevel+1)/6);    
}

let spellMap = new Map().addSpells();
let select = null;

function spellListSelect() {
    return Array.from(spellMap.keys(), x => {return {text: x}});
}

function addSpellsToSelect() {
    select = new SlimSelect({
        select: '#spellsSelect',
        data: spellListSelect(),
        onChange: function() {calculateSpellDamage();}
    });
}

function setSpellDamage(rnd1, rnd2, rnd3) {
    document.getElementById("spellDmg1").innerHTML = rnd1;
    document.getElementById("spellDmg2").innerHTML = rnd2;
    document.getElementById("spellDmg3").innerHTML = rnd3;
    history.pushState({},"WC5e CR Calculator","?" + generateUrl());
}

function calculateSpellDamage() {
    let spellSlots = [parseInt(document.getElementById("ss1").value), parseInt(document.getElementById("ss2").value), parseInt(document.getElementById("ss3").value)];
    if (!select) return setSpellDamage(0,0,0);
    let spells = select.selected();
    if (spells.length == 0) return setSpellDamage(0,0,0);
    let dmgArray = [3];
    for (i = 0; i < 3; i++) {
        let dmg = 0;
        spells.forEach(spellName => {
            let spell = spellMap.get(spellName);
            if (spell.spellSlot <= spellSlots[i]) {
                dmg = Math.max(dmg, spell.calcDamage(spellSlots[i]));
            }
        });
        dmgArray[i] = dmg;
    }
    setSpellDamage(dmgArray[0],dmgArray[1],dmgArray[2]);
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
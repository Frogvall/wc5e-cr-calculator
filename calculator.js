function untangleDiceExpression(expression) {
  return expression.replace(/(\d+)d(\d+)/g, function(match, group1, group2) {
    return `${Math.floor((group2/2+0.5)*group1)}`
  })
}

function fillOut(_valueString) {
  if (!_valueString) {
    addSpellsToSelect();
    return;
  }
  var values = decodeURI(_valueString).split(";");
  if (values[0] != "v2") {
    legacyFillOut(_valueString);
  } else {
    document.getElementById("targetCR").selectedIndex = values[1];
    document.getElementById("actualAC").value = values[2];
    document.getElementById("actualHP").value = values[3];
    document.getElementById("actualAB").value = values[4];
    document.getElementById("actualSDC").value = values[5];
    document.getElementById("pDmg1").value = values[6];
    document.getElementById("pDmg2").value = values[7];
    document.getElementById("pDmg3").value = values[8];
    document.getElementById("pDmg4").value = values[9];
    document.getElementById("pDmg5").value = values[10];
    document.getElementById("pDmg6").value = values[11];
    document.getElementById("damageResistance").checked = values[12];
    document.getElementById("damageImmunity").checked = values[13];
    document.getElementById("flySpeedAndRangedAttack").checked = values[14];
    document.getElementById("savingThrowProficiencies").checked = values[15];
    document.getElementById("savingThrowProficiencyCount").value = values[16];
    document.getElementById("aggressive").checked = values[17];
    document.getElementById("ambusher").checked = values[18];
    document.getElementById("avoidance").checked = values[19];
    document.getElementById("bloodFrenzy").checked = values[20];
    document.getElementById("constrict").checked = values[21];
    document.getElementById("damageTransfer").checked = values[22];
    document.getElementById("frightfulPresence").checked = values[23];
    document.getElementById("horrifyingVisage").checked = values[24];
    document.getElementById("legendaryResistance").checked = values[25];
    document.getElementById("legendaryResistanceUses").value = values[26];
    document.getElementById("magicResistance").checked = values[27];
    document.getElementById("nimbleEscape").checked = values[28];
    document.getElementById("packTactics").checked = values[29];
    document.getElementById("parry").checked = values[30];
    document.getElementById("possession").checked = values[31];
    document.getElementById("rampage").checked = values[32];
    document.getElementById("regeneration").checked = values[33];
    document.getElementById("regenerationValue").value = values[34];
    document.getElementById("relentless").checked = values[35];
    document.getElementById("shadowStealth").checked = values[36];
    document.getElementById("stench").checked = values[37];
    document.getElementById("superiorInvisibility").checked = values[38];
    document.getElementById("undeadFortitude").checked = values[39];
    document.getElementById("web").checked = values[40];
    document.getElementById("ss1").value = values[41];
    document.getElementById("ss2").value = values[42];
    document.getElementById("ss3").value = values[43];
    document.getElementById("scl").value = values[44];
    document.getElementById("wc5e").checked = values[45] == "1";
    document.getElementById("coa").checked = values[46] == "1" && values[45] != "1";
    document.getElementById("wotc").checked = values[47] == "1";
    document.getElementById("scm").value = values[48];
    addSpellsToSelect();
    let spellStartIndex = 49
    let is1 = values.indexOf('is1');
    let is2 = values.indexOf('is2');
    let is3 = values.indexOf('is3');
    if (is1 == -1) {
      let spellNames = [values.length-spellStartIndex];
      for (var i = spellStartIndex; i < values.length; i++) {
        spellNames[i-spellStartIndex] = decodeURIComponent(values[i]);
      }
      select.set(spellNames);
    } else {
      let spellNames = [is1-spellStartIndex];
      for (var i = spellStartIndex; i < is1; i++) {
        spellNames[i-spellStartIndex] = decodeURIComponent(values[i]);
      }
      select.set(spellNames);
      spellNames = [is2-is1-1];
      for (var i = is1+1; i < is2; i++) {
        spellNames[i-is1-1] = decodeURIComponent(values[i]);
      }
      iSelect1.set(spellNames);
      spellNames = [is3-is2-1];
      for (var i = is2+1; i < is3; i++) {
        spellNames[i-is2-1] = decodeURIComponent(values[i]);
      }
      iSelect2.set(spellNames);
      spellNames = [values.length-is3-1];
      for (var i = is3+1; i < values.length; i++) {
        spellNames[i-is3-1] = decodeURIComponent(values[i]);
      }
      iSelect3.set(spellNames);
    }
  }
  calculateSpellDamage();
  Calculate();
}

function legacyFillOut(_valueString) {
  var values = _valueString.split(";");
  document.getElementById("targetCR").selectedIndex = values[0];
  document.getElementById("actualAC").value = values[1];
  document.getElementById("actualHP").value = values[2];
  document.getElementById("actualAB").value = values[3];
  document.getElementById("actualSDC").value = values[4];
  document.getElementById("pDmg1").value = values[6] === "0" ? values[5] : `${values[5]}+${values[6]}`;
  document.getElementById("pDmg2").value = values[8] === "0" ? values[7] : `${values[7]}+${values[8]}`;
  document.getElementById("pDmg3").value = values[10] === "0" ? values[9] : `${values[9]}+${values[10]}`;
  document.getElementById("pDmg4").value = values[12] === "0" ? values[11] : `${values[11]}+${values[12]}`;
  document.getElementById("pDmg5").value = values[14] === "0" ? values[13] : `${values[13]}+${values[14]}`;
  document.getElementById("pDmg6").value = values[16] === "0" ? values[15] : `${values[15]}+${values[16]}`;
  document.getElementById("damageResistance").checked = values[17];
  document.getElementById("damageImmunity").checked = values[18];
  document.getElementById("flySpeedAndRangedAttack").checked = values[19];
  document.getElementById("savingThrowProficiencies").checked = values[20];
  document.getElementById("savingThrowProficiencyCount").value = values[21];
  document.getElementById("aggressive").checked = values[22];
  document.getElementById("ambusher").checked = values[23];
  document.getElementById("avoidance").checked = values[24];
  document.getElementById("bloodFrenzy").checked = values[25];
  document.getElementById("constrict").checked = values[26];
  document.getElementById("damageTransfer").checked = values[27];
  document.getElementById("frightfulPresence").checked = values[28];
  document.getElementById("horrifyingVisage").checked = values[29];
  document.getElementById("legendaryResistance").checked = values[30];
  document.getElementById("legendaryResistanceUses").value = values[31];
  document.getElementById("magicResistance").checked = values[32];
  document.getElementById("nimbleEscape").checked = values[33];
  document.getElementById("packTactics").checked = values[34];
  document.getElementById("parry").checked = values[35];
  document.getElementById("possession").checked = values[36];
  document.getElementById("rampage").checked = values[37];
  document.getElementById("regeneration").checked = values[38];
  document.getElementById("regenerationValue").value = values[39];
  document.getElementById("relentless").checked = values[40];
  document.getElementById("shadowStealth").checked = values[41];
  document.getElementById("stench").checked = values[42];
  document.getElementById("superiorInvisibility").checked = values[43];
  document.getElementById("undeadFortitude").checked = values[44];
  document.getElementById("web").checked = values[45];
  document.getElementById("ss1").value = values[46];
  document.getElementById("ss2").value = values[47];
  document.getElementById("ss3").value = values[48];
  document.getElementById("scl").value = values[49];
  let spellStartIndex = 50;
  if (values.length > 50 && /^-?\d+$/.test(values[50])) {
    document.getElementById("wc5e").checked = values[50] == "1";
    document.getElementById("coa").checked = values[51] == "1" && values[50] != "1";
    document.getElementById("wotc").checked = values[52] == "1";
    spellStartIndex = 53;
  } else {
    document.getElementById("wc5e").checked = 1;
    document.getElementById("coa").checked = 0;
    document.getElementById("wotc").checked = 1;
  }
  if (values.length > 53 && /^-?\d+$/.test(values[53])) {
    document.getElementById("scm").value = values[53];
    spellStartIndex = 54;
  } else {
    document.getElementById("scm").value = 3;
  }
  addSpellsToSelect();
  let is1 = values.indexOf('is1');
  let is2 = values.indexOf('is2');
  let is3 = values.indexOf('is3');
  if (is1 == -1) {
    let spellNames = [values.length-spellStartIndex];
    for (var i = spellStartIndex; i < values.length; i++) {
      spellNames[i-spellStartIndex] = decodeURIComponent(values[i]);
    }
    select.set(spellNames);
  } else {
    let spellNames = [is1-spellStartIndex];
    for (var i = spellStartIndex; i < is1; i++) {
      spellNames[i-spellStartIndex] = decodeURIComponent(values[i]);
    }
    select.set(spellNames);
    spellNames = [is2-is1-1];
    for (var i = is1+1; i < is2; i++) {
      spellNames[i-is1-1] = decodeURIComponent(values[i]);
    }
    iSelect1.set(spellNames);
    spellNames = [is3-is2-1];
    for (var i = is2+1; i < is3; i++) {
      spellNames[i-is2-1] = decodeURIComponent(values[i]);
    }
    iSelect2.set(spellNames);
    spellNames = [values.length-is3-1];
    for (var i = is3+1; i < values.length; i++) {
      spellNames[i-is3-1] = decodeURIComponent(values[i]);
    }
    iSelect3.set(spellNames);
  }
}

function generateUrl() {
  var valueString = "v2;" +
    document.getElementById("targetCR").selectedIndex
    + ";" +
    document.getElementById("actualAC").value
    + ";" +
    document.getElementById("actualHP").value
    + ";" +
    document.getElementById("actualAB").value
    + ";" +
    document.getElementById("actualSDC").value
    + ";" +
    document.getElementById("pDmg1").value
    + ";" +
    document.getElementById("pDmg2").value
    + ";" +
    document.getElementById("pDmg3").value
    + ";" +
    document.getElementById("pDmg4").value
    + ";" +
    document.getElementById("pDmg5").value
    + ";" +
    document.getElementById("pDmg6").value
    + ";" +
    (document.getElementById("damageResistance").checked ? "1" : "")
    + ";" +
    (document.getElementById("damageImmunity").checked ? "1" : "")
    + ";" +
    (document.getElementById("flySpeedAndRangedAttack").checked ? "1" : "")
    + ";" +
    (document.getElementById("savingThrowProficiencies").checked ? "1" : "")
    + ";" +
    document.getElementById("savingThrowProficiencyCount").value
    + ";" +
    (document.getElementById("aggressive").checked ? "1" : "")
    + ";" +
    (document.getElementById("ambusher").checked ? "1" : "")
    + ";" +
    (document.getElementById("avoidance").checked ? "1" : "")
    + ";" +
    (document.getElementById("bloodFrenzy").checked ? "1" : "")
    + ";" +
    (document.getElementById("constrict").checked ? "1" : "")
    + ";" +
    (document.getElementById("damageTransfer").checked ? "1" : "")
    + ";" +
    (document.getElementById("frightfulPresence").checked ? "1" : "")
    + ";" +
    (document.getElementById("horrifyingVisage").checked ? "1" : "")
    + ";" +
    (document.getElementById("legendaryResistance").checked ? "1" : "")
    + ";" +
    document.getElementById("legendaryResistanceUses").value
    + ";" +
    (document.getElementById("magicResistance").checked ? "1" : "")
    + ";" +
    (document.getElementById("nimbleEscape").checked ? "1" : "")
    + ";" +
    (document.getElementById("packTactics").checked ? "1" : "")
    + ";" +
    (document.getElementById("parry").checked ? "1" : "")
    + ";" +
    (document.getElementById("possession").checked ? "1" : "")
    + ";" +
    (document.getElementById("rampage").checked ? "1" : "")
    + ";" +
    (document.getElementById("regeneration").checked ? "1" : "")
    + ";" +
    document.getElementById("regenerationValue").value
    + ";" +
    (document.getElementById("relentless").checked ? "1" : "")
    + ";" +
    (document.getElementById("shadowStealth").checked ? "1" : "")
    + ";" +
    (document.getElementById("stench").checked ? "1" : "")
    + ";" +
    (document.getElementById("superiorInvisibility").checked ? "1" : "")
    + ";" +
    (document.getElementById("undeadFortitude").checked ? "1" : "")
    + ";" +
    (document.getElementById("web").checked ? "1" : "")
    + ";" +
    document.getElementById("ss1").value
    + ";" +
    document.getElementById("ss2").value
    + ";" +
    document.getElementById("ss3").value
    + ";" +
    document.getElementById("scl").value
    + ";" +
    (document.getElementById("wc5e").checked ? "1" : "0")
    + ";" +
    (document.getElementById("coa").checked ? "1" : "0")
    + ";" +
    (document.getElementById("wotc").checked ? "1" : "0")
    + ";" +
    document.getElementById("scm").value
    + ";" +
    select.selected().join(';')
    + ';is1;' +
    iSelect1.selected().join(';')
    + ';is2;' +
    iSelect2.selected().join(';')
    + ';is3;' +
    iSelect3.selected().join(';')
    ;
  return valueString;
}
function Roll(_x, _y, _n, _l = true) // roll XdY, drop N (L=true: drop lowest, L=false: drop highest)
{
  if (_n === undefined || isNaN(_n)) {
    _n = 0;
  }
  if (_x < 1 || _y < 1 || _n >= _x) {
    return 0;
  }
  var rolls = [];
  for (var i = 0; i < _x; i++) {
    rolls.push(Math.ceil(Math.random() * _y));
  }
  rolls.sort();
  for (var i = 0; i < _n; i++) {
    if (_l) {
      rolls.shift();
    }
    else {
      rolls.pop();
    }
  }
  var roll = 0;
  for (var i = 0; i < rolls.length; i++) {
    roll += rolls[i];
  }
  return roll;
}
function popup(_sel) {
  switch (_sel) {
    case "traits":
      var traitTutorial = window.open("", "", "height=400,width=600");
      traitTutorial.document.write("<div style='width:100%;height:100%;' onclick='window.close()'><h2><i>Where are all the other traits?</i></h2><p>You have probably noticed that the traits included in the list of checkboxes here is far from exhaustive&mdash;there is a reason for this:</p><p>According to the trait inventory in the DMG (see pp.280&ndash;281 for the full list), many traits have no effect on a creature's CR, so they are not listed here.</p><p>Furthermore, many of the traits that <i>do</i> affect CR still aren't included, because the extent of their effect is to increase the monster's damage output for one or more turns by either a specified amount, or by granting the monster an extra attack (<b><i>Brute</i></b>, <b><i>Surprise Attack</i></b>, and <b><i>Trampling Charge</i></b> would be examples of this).</p><p>In these cases, you simply add the damage specified to the monster's damage-per-round as makes sense for the trait, and thus eliminate the need for a corresponding trait button.</p><p><small><i>(Click anywhere to close)</i></small></div>");
      break;
    case "tutorial":
      var tutorial = window.open("", "", "height=648,width=1152");
      tutorial.document.write(
        "<div style='width:100%;height:100%;' onclick='window.close()'><h2><i>What is This and How Do I Use It?</i></h2><p style='position:relative;top:-12px;'><small><i>(Click anywhere to close)</i></small></p><p>This is a CR Calculator for Dungeons and Dragons 5th edition. You can find a full explanation of how all of these calculations work in chapter 9 of the <i>Dungeon Master's Guide</i>, as the calculations done by this tool are all completely based on the steps and guidelines laid out there.</p><h2><i>Step 1: Target CR Range</i></h2><p>In the 'Target CR Range' dropdown at the top of the tool, simply choose the range of challenge ratings where you want or expect the creature to fall.</p><p>Several of the calculations done during this process will change depending on the desired final CR of the creature, so choose this first, even if it's just a guess&mdash;you can always come back and change it later if necessary.</p><p>If the CR falls outside the range you chose, the box will turn yellow, notifying you of the discrepancy. Note that because of the way the CR range affects some of the stat calculations, there is an occasional possibility for the target CR to show as incorrect no matter which range you choose&mdash;specifically when the creature falls very near the border of two of the specified ranges. You may have to alter some stats to stabilize the CR, or simply average the two reported CRs given when you select the two ranges.</p><h2><i>Step 2: Defensive CR</i></h2><p>Input the creature's AC as written on the stat block into the 'Actual AC' box, then do the same for the creature's HP.</p><p>You may notice that the 'Effective' AC and HP to the right of your inputs may differ: this is okay. There are certain attributes and traits that are calculated by changing the creature's statistics superficially for the purposes of the calculation, but which don't actually affect what's written on the stat block. You can safely ignore these 'Effective' stats if you wish: they are there for your own information only, and have no bearing on the creature in-game.</p><h2><i>Step 3: Offensive CR</i></h2><p>As you did with the defensive stats, input the creature's attack bonus (the number that precedes 'to hit' on the creature's attacks; omit the plus sign) for the attack or attacks it will be using most often&mdash;keep in mind this might be its spellcasting attack bonus, if it will be relying more heavily on spellcasting.</p><p>Next, use the boxes to the right of the 'Damage per Round' readout to input the most damage per round it can input throughout the fight. The damage boxes takes a mathematical expression. You can ignore this and just fill in a number, but if you want to track different damage sources separately you can do so by plussing them together. Likewise, the average damage per turn calculation only recognizes rounds that have a nonzero value, so you can use as many rounds as you wish, from 1 to 6. The DMG suggests using 3, but I have found that in certain circumstances, more are necessary to get an accurate simulation.</p><p>You can use whatever method you think makes the most sense for how to accurately represent the creature's damage output throughout the fight, though the guidelines in the DMG specify that you should use the following 'rules' when determining this total:</p><ul><li>Always use the average damage for any given damage expression (i.e. use 3 for 1d6, 9 for 2d8, 11 for 2d8 + 2, etc.).</li><li>Assume every attack hits its target, and that the target fails its save for any additional damage and/or effect.</li><li>If the attack or effect has an area of effect, assume that it targets two creatures, and that both fail their saves.</li><li>If an action or effect recharges according to a d6 roll (e.g. 'Recharge 4&ndash;6'), assume the average number of rounds it will take to recharge: two rounds for 4&ndash;6, three rounds for 5&ndash;6, or six rounds for 6.</ul><p>Then, set the save DC that the creature's enemies will need to roll against most often to avoid its effects. If the creature has no abilities or effects that require a save, you can simply set this number to zero.</p><h2><i>Step 4: Traits, Etc.</i></h2><p>Simply check the boxes for any relevant traits or attributes that apply to the creature. You'll notice that this list is far from exhaustive, this is because the vast majority of traits either have no effect on the creature's CR (per the DMG), or serve only to provide an extra attack, or to deal extra damage, in which case you would increase the creature's damage output in the calculator as makes sense for that trait or ability. Click the 'Where are the rest of the traits?' line to learn more. Additionally, you can hover over any of the listed traits to see a brief description or explanation of that trait and/or its effects on the creature's CR.</p><p><b>Special Note:</b> be aware that the damage resistances and immunities check boxes should only be checked <i>if the damage types are ones that aren't likely to be easily bypassed.</i> For example, you should check these boxes for resistance or immunity to nonmagical bludgeoning, piercing, or slashing damage, or perhaps even for fire, force, lightning, or some other common magic damage type. However, resistance or immunity to something like poison damage is common enough among monsters and rare enough among spells and class abilities that it won't likely make a significant impact on the creature's difficulty in actual use.</p><h2><i>The Final Result</i></h2><p>Once this is all done, you can check the final result at the very bottom, where it says 'Overall CR' (The smaller number in parentheses is the final CR result before rounding).</p><h2><i>Optional: Spell Calculator</i></h2><p>Also included is a spell calculator. In order to use it, fill out the level of your monster's top 3 available spell slots, the caster level of the monster and select the spells it has available to it. If a spell is not in the list, it's because it does not use an action to deal direct damage. For such spells, like for example <i>Hex</i>, you have to manually calculate if the spell affects the damage output of the monster.</p><p>Whenever a value is changed the spell calculator will fill out the damage per turn the spells produce, and for transparency, list what spells were used to get to those numbers.</p><p>Finally, if you wish to transfer those calculated numbers to the CR calculator, press <i>Transfer</i>. <b>Warning:</b> Any values in the damage form of the CR calculator will be replaced by the spell calculator numbers.</p><p><b>Assumptions.</b> Spells that hit more than one creature is assumed to hit two creatures for calculating damage. Damage over time effects that rely on concentration, a failed save each turn or an action to douse it, is assumed to get one extra tick of damage before disappearing.</b></p><small><i>(Click anywhere to close)</i></small></div>");
      break;
  }
}
function promptN(_y) {
  return window.prompt("Roll Xd" + _y + "; X=", 1);
}
function roundCR(_num, _alpha = false) {
  if (_num >= 1) {
    if (_alpha) {
      return Math.round(_num).toString();
    } else {
      return Math.round(_num);
    }
  } else if (_num >= 0.5) {
    if (_alpha) {
      if ((Math.round(_num * 2) / 2) == 0.5) {
        return "&frac12;";
      } else {
        return "1";
      }
    } else {
      return Math.round(_num * 2) / 2;
    }
  } else if (_num >= 0.25) {
    if (_alpha) {
      if ((Math.round(_num * 4) / 4) == 0.25) {
        return "&frac14;";
      } else {
        return "&frac12;";
      }
    } else {
      return Math.round(_num * 4) / 4;
    }
  } else if (_num >= 0.125) {
    if (_alpha) {
      if ((Math.round(_num * 8) / 8) == 0.125) {
        return "&frac18;";
      } else {
        return "&frac14;";
      }
    } else {
      return Math.round(_num * 8) / 8;
    }
  } else if (_alpha) {
    if ((Math.round(_num * 8) / 8) == 0.125) {
      return "&frac18;";
    } else {
      return "0";
    }
  } else {
    return Math.round(_num * 8) / 8;
  }
}
function DCRbyHP(_hp) {
  if (_hp < 7) {
    return -3;
  } else if (_hp < 19) {
    return -2;
  } else if (_hp < 31) {
    return -1;
  } else if (_hp < 51) {
    return 0
  } else if (_hp < 86) {
    return 1;
  } else if (_hp < 356) {
    return 1 + Math.floor((_hp - 71) / 15);
  } else {
    return 20 + Math.floor((_hp - 356) / 45);
  }
}
function ACforHPCR(_hpcr) {
  if (_hpcr <= -3) {
    return Math.min(Math.floor(math.evaluate(document.getElementById("actualAC").value)), 13);
  } else if (_hpcr < 3) {
    return 13;
  } else if (_hpcr < 5) {
    return 14;
  } else if (_hpcr < 8) {
    return 15;
  } else if (_hpcr < 10) {
    return 16;
  } else if (_hpcr < 13) {
    return 17;
  } else if (_hpcr < 17) {
    return 18;
  } else {
    return 19;
  }
}
function OCRbyDmg(_dmg) {
  if (_dmg < 2) {
    return -3;
  } else if (_dmg < 4) {
    return -2;
  } else if (_dmg < 6) {
    return -1;
  } else if (_dmg < 9) {
    return 0;
  } else if (_dmg < 123) {
    return 1 + Math.floor((_dmg - 9) / 6);
  } else {
    return 20 + Math.floor((_dmg - 123) / 18);
  }
}
function AttforDmgCR(_dmgcr) {
  if (_dmgcr <= -3) {
    return Math.min(parseInt(document.getElementById("actualAB").value), 3);
  } else if (_dmgcr < 3) {
    return 3;
  } else if (_dmgcr < 4) {
    return 4;
  } else if (_dmgcr < 5) {
    return 5;
  } else if (_dmgcr < 8) {
    return 6;
  } else if (_dmgcr < 11) {
    return 7;
  } else if (_dmgcr < 16) {
    return 8;
  } else if (_dmgcr < 17) {
    return 9;
  } else if (_dmgcr < 21) {
    return 10;
  } else if (_dmgcr < 24) {
    return 11;
  } else if (_dmgcr < 27) {
    return 12;
  } else if (_dmgcr < 30) {
    return 13;
  } else {
    return 14;
  }
}
function SDCforDmgCR(_dmgcr) {
  if (_dmgcr <= -3) {
    return Math.min(parseInt(document.getElementById("actualSDC").value), 13);
  } else if (_dmgcr < 4) {
    return 13;
  } else if (_dmgcr < 5) {
    return 14;
  } else if (_dmgcr < 8) {
    return 15;
  } else if (_dmgcr < 11) {
    return 16;
  } else if (_dmgcr < 13) {
    return 17;
  } else if (_dmgcr < 17) {
    return 18;
  } else if (_dmgcr < 21) {
    return 19;
  } else if (_dmgcr < 24) {
    return 20;
  } else if (_dmgcr < 27) {
    return 21;
  } else if (_dmgcr < 30) {
    return 22;
  } else {
    return 23;
  }
}
function Validate() // Makes sure the current values in all input boxes are within acceptable ranges. If not, set to default
{
  try {
    if (math.evaluate(document.getElementById("actualAC").value) < 1) { document.getElementById("actualAC").value = 1; }
  } catch (error) {
    document.getElementById("actualAC").value = 1;
  }
  
  if (parseInt(document.getElementById("savingThrowProficiencyCount").value) < 0) {
    document.getElementById("savingThrowProficiencyCount").value = 0;
  }
  if (parseInt(document.getElementById("savingThrowProficiencyCount").value) > 6) {
    document.getElementById("savingThrowProficiencyCount").value = 6;
  }
  try {
    if (math.evaluate(untangleDiceExpression(document.getElementById("actualHP").value)) < 1) { document.getElementById("actualHP").value = 1; }
  } catch (error) {
    document.getElementById("actualHP").value = 1;
  }
  if (parseInt(document.getElementById("actualAB").value) < 0) { document.getElementById("actualAB").value = 0; }
  try {
    if (math.evaluate(untangleDiceExpression(document.getElementById("pDmg1").value)) < 0) { document.getElementById("pDmg1").value = 0; }  
  } catch (error) {
    document.getElementById("pDmg1").value = 0;
  }
  try {
    if (math.evaluate(untangleDiceExpression(document.getElementById("pDmg2").value)) < 0) { document.getElementById("pDmg2").value = 0; }  
  } catch (error) {
    document.getElementById("pDmg2").value = 0;
  }
  try {
    if (math.evaluate(untangleDiceExpression(document.getElementById("pDmg3").value)) < 0) { document.getElementById("pDmg3").value = 0; }  
  } catch (error) {
    document.getElementById("pDmg3").value = 0;
  }
  try {
    if (math.evaluate(untangleDiceExpression(document.getElementById("pDmg4").value)) < 0) { document.getElementById("pDmg4").value = 0; }  
  } catch (error) {
    document.getElementById("pDmg4").value = 0;
  }
  try {
    if (math.evaluate(untangleDiceExpression(document.getElementById("pDmg4").value)) < 0) { document.getElementById("pDmg4").value = 0; }  
  } catch (error) {
    document.getElementById("pDmg4").value = 0;
  }
  try {
    if (math.evaluate(untangleDiceExpression(document.getElementById("pDmg5").value)) < 0) { document.getElementById("pDmg5").value = 0; }  
  } catch (error) {
    document.getElementById("pDmg5").value = 0;
  }
  if (parseInt(document.getElementById("actualSDC").value) < 1) { document.getElementById("actualSDC").value = 1; }
  if (parseInt(document.getElementById("legendaryResistanceUses").value) < 1) { document.getElementById("legendaryResistanceUses").value = 1; }
  if (parseInt(document.getElementById("regenerationValue").value) < 1) { document.getElementById("regenerationValue").value = 1; }
}
function TransformToTableValue(_value) {
  if (_value == -3) return 0;
  if (_value == -2) return 0.125;
  if (_value == -1) return 0.250;
  if (_value == 0) return 0.5;
  return _value;
}
function Calculate() // Begins main CR calculation
{
  Validate(); // validate that inputs are OK

  //CALCULATE TIER â€” check target CR range, shorten to a corresponding "tier"
  var tier = 1;
  if (document.getElementById("targetCR").value == "0-4") {
    tier = 1;
  } else if (document.getElementById("targetCR").value == "5-10") {
    tier = 2;
  } else if (document.getElementById("targetCR").value == "11-16") {
    tier = 3;
  } else if (document.getElementById("targetCR").value == "17p") {
    tier = 4;
  }

  //CALCULATE AC â€” check the 'Actual AC' input and modify it according to all applicable traits, etc., then store & output as 'effective AC'
  var AC = Math.floor(math.evaluate(document.getElementById("actualAC").value));
  var effAC = document.getElementById("effectiveAC");
  if (document.getElementById("flySpeedAndRangedAttack").checked && tier <= 2) { AC += 2; }
  document.getElementById("savingThrowProficiencyCount").disabled = true;
  if (document.getElementById("savingThrowProficiencies").checked) {
    document.getElementById("savingThrowProficiencyCount").disabled = false;
    var saves = parseInt(document.getElementById("savingThrowProficiencyCount").value);
    if (saves >= 3) { AC += 2; }
    if (saves >= 5) { AC += 2; }
  }
  if (document.getElementById("avoidance").checked) { AC += 1; }
  if (document.getElementById("constrict").checked) { AC += 1; }
  if (document.getElementById("magicResistance").checked) { AC += 2; }
  if (document.getElementById("nimbleEscape").checked) { AC += 4; }
  if (document.getElementById("parry").checked) { AC += 1; }
  if (document.getElementById("shadowStealth").checked) { AC += 4; }
  if (document.getElementById("stench").checked) { AC += 1; }
  if (document.getElementById("superiorInvisibility").checked) { AC += 2; }
  if (document.getElementById("web").checked) { AC += 1; }
  effAC.innerHTML = AC;

  //CALCULATE HP â€” check the 'actual HP' input and modify it according to applicable traits/tier/etc., then store & output as 'effective HP'
  var HP = Math.floor(math.evaluate(untangleDiceExpression(document.getElementById("actualHP").value))), actualHP = HP;
  var effHP = document.getElementById("effectiveHP");
  var hpMult = 1;   // This variable represents that different HP multipliers should be additive, not multiplicative (i.e. "+100%" and "+100%" equals "+200%", as opposed to "x2" and "x2" equals "x4")
  switch (tier) {   // check CR "tier", then adjust any modifiers for dmg resistance/immunity accordingly.
    case 1:
      if (document.getElementById("damageResistance").checked || document.getElementById("damageImmunity").checked) {
        hpMult = 2;
      }
      break;
    case 2:
      if (document.getElementById("damageResistance").checked) {
        hpMult = 1.5;
      }
      if (document.getElementById("damageImmunity").checked) {
        hpMult = 2;
      }
      break;
    case 3:
      if (document.getElementById("damageResistance").checked) {
        hpMult = 1.25;
      }
      if (document.getElementById("damageImmunity").checked) {
        hpMult = 1.5;
      }
      break;
    case 4:
      if (document.getElementById("damageImmunity").checked) {
        hpMult = 1.25;
      }
      break;
  }
  if (document.getElementById("damageTransfer").checked) { hpMult += 1; }
  if ((document.getElementById("frightfulPresence").checked || document.getElementById("horrifyingVisage").checked) && tier <= 2) { hpMult += 0.25; }    // Frightful Presence and Horrifying Visage are listed in the DMG as having the same effect, and in fact referencing each other. As such, it doesn't make sense for their effects to stack, so just check for either one
  if (document.getElementById("possession").checked) { hpMult += 1; }
  HP = Math.floor(HP * hpMult);   // Once all HP multipliers have been assessed, multiply by 'Actual HP'
  document.getElementById("legendaryResistanceUses").disabled = true;   // As validation/redundancy, I disable an input, then only re-enable if that input's checkbox is checked
  if (document.getElementById("legendaryResistance").checked) {
    document.getElementById("legendaryResistanceUses").disabled = false;
    var usesPerDay = parseInt(document.getElementById("legendaryResistanceUses").value);
    switch (tier) {
      case 1:
        HP += 10 * usesPerDay;
        break;
      case 2:
        HP += 20 * usesPerDay;
        break;
      case 3:
      case 4:
        HP += 30 * usesPerDay;
        break;
    }
  }
  document.getElementById("regenerationValue").disabled = true;
  if (document.getElementById("regeneration").checked) {
    document.getElementById("regenerationValue").disabled = false;
    HP += (3 * parseInt(document.getElementById("regenerationValue").value));
  }
  if (document.getElementById("relentless").checked) { HP += (7 * tier); }
  if (document.getElementById("undeadFortitude").checked) { HP += (7 * tier); }
  if (actualHP !== HP) {
    effHP.innerHTML = `${HP} (${actualHP})`;
  } else {
    effHP.innerHTML = HP;
  }

  //CALCULATE ATTACK BONUS
  var attBonus = parseInt(document.getElementById("actualAB").value);
  var effAttBonus = document.getElementById("effectiveAB");
  if (document.getElementById("ambusher").checked) { attBonus += 1; }
  if (document.getElementById("bloodFrenzy").checked) { attBonus += 4; }
  if (document.getElementById("nimbleEscape").checked) { attBonus += 4; }
  if (document.getElementById("packTactics").checked) { attBonus += 1; }
  effAttBonus.innerHTML = "+" + attBonus;

  //CALCULATE DMG/ROUND
  var totalDmg = 0;
  var rounds = 0;
  var aggDmg = 0;
  var dmgTransferDmg = 0;
  var rmpgDmg = 0;
  if (document.getElementById("aggressive").checked) { aggDmg = 2; }
  if (document.getElementById("damageTransfer").checked) { dmgTransferDmg = Math.floor(Math.round(math.evaluate(untangleDiceExpression(document.getElementById("actualHP").value))) / 3); }
  if (document.getElementById("rampage").checked) { rmpgDmg = 2; }
  var dmg1 = Math.floor(math.evaluate(untangleDiceExpression(document.getElementById("pDmg1").value)));
  if (dmg1 > 0) {
    dmg1 += aggDmg + dmgTransferDmg + rmpgDmg;
    rounds++;
  } else {
    dmg1 = 0;
  }
  document.getElementById("rndDmg1").innerHTML = dmg1;
  var dmg2 = Math.floor(math.evaluate(untangleDiceExpression(document.getElementById("pDmg2").value)));
  if (dmg2 > 0) {
    dmg2 += aggDmg + dmgTransferDmg + rmpgDmg;
    rounds++;
  } else {
    dmg2 = 0;
  }
  document.getElementById("rndDmg2").innerHTML = dmg2;
  var dmg3 = Math.floor(math.evaluate(untangleDiceExpression(document.getElementById("pDmg3").value)));
  if (dmg3 > 0) {
    dmg3 += aggDmg + dmgTransferDmg + rmpgDmg;
    rounds++;
  } else {
    dmg3 = 0;
  }
  document.getElementById("rndDmg3").innerHTML = dmg3;
  var dmg4 = Math.floor(math.evaluate(untangleDiceExpression(document.getElementById("pDmg4").value)));
  if (dmg4 > 0) {
    dmg4 += aggDmg + dmgTransferDmg + rmpgDmg;
    rounds++;
  } else {
    dmg4 = 0;
  }
  document.getElementById("rndDmg4").innerHTML = dmg4;
  var dmg5 = Math.floor(math.evaluate(untangleDiceExpression(document.getElementById("pDmg5").value)));
  if (dmg5 > 0) {
    dmg5 += aggDmg + dmgTransferDmg + rmpgDmg;
    rounds++;
  } else {
    dmg5 = 0;
  }
  document.getElementById("rndDmg5").innerHTML = dmg5;
  var dmg6 =  Math.floor(math.evaluate(untangleDiceExpression(document.getElementById("pDmg6").value)));
  if (dmg6 > 0) {
    dmg6 += aggDmg + dmgTransferDmg + rmpgDmg;
    rounds++; 
  } else {
    dmg6 = 0;
  }
  document.getElementById("rndDmg6").innerHTML = dmg6;
  if (rounds <= 1) {
    document.getElementById("nRounds").innerHTML = "1 round";
  } else {
    document.getElementById("nRounds").innerHTML = rounds + " rounds";
  }
  totalDmg = dmg1 + dmg2 + dmg3 + dmg4 + dmg5 + dmg6;
  var modDmg = totalDmg;
  if (rounds > 0) {
    modDmg = Math.round(totalDmg / rounds);
  } else {
    modDmg = 0;
  }
  document.getElementById("avgDmg").innerHTML = modDmg;
  document.getElementById("dmgPerRound").innerHTML = modDmg;

  //CALCULATE SAVE DC
  var SDC = parseInt(document.getElementById("actualSDC").value);
  var effSaveDC = document.getElementById("effectiveSDC");
  effSaveDC.innerHTML = SDC;

  //CALCULATE DEFENSIVE CR
  var HPCR = DCRbyHP(HP);
  var expectedAC = ACforHPCR(HPCR);
  var DCR = HPCR;
  var adjAC = "";

  if (HPCR == -3) {
    if (AC > 14) {
      DCR += Math.floor(Math.abs(AC - 13) / 2);
      adjAC = " (+" + Math.floor(Math.abs(AC - 13) / 2) + " CR)"
    } else {
      adjAC = " (+0 CR)"
    }
  } else if ((AC - expectedAC) > -2) {
    DCR += Math.floor(Math.abs(AC - expectedAC) / 2);
    adjAC = " (+" + Math.floor(Math.abs(AC - expectedAC) / 2) + " CR)"
  } else {
    DCR -= Math.floor(Math.abs(AC - expectedAC) / 2);
    adjAC = " (-" + Math.floor(Math.abs(AC - expectedAC) / 2) + " CR)"
  }
  if (DCR < -3) { DCR = -3; }

  document.getElementById("CRbyHP").innerHTML = roundCR(TransformToTableValue(HPCR), true);
  if (HPCR == -3) {
    document.getElementById("HPCRAC").innerHTML = "&le;13<br/><span class='smallAddendum'>" + adjAC + "</span>";
  } else {
    document.getElementById("HPCRAC").innerHTML = expectedAC + "<br/><span class='smallAddendum'>" + adjAC + "</span>";
  }
    document.getElementById("defensiveCR").innerHTML = roundCR(TransformToTableValue(DCR), true) + "<br/><span class='smallAddendum'>(" + TransformToTableValue(DCR) + ")</span>";

  //CALCULATE OFFENSIVE CR
  var dmgCR = OCRbyDmg(modDmg);
  var expectedAtt = AttforDmgCR(dmgCR);
  var expectedSDC = SDCforDmgCR(dmgCR);
  var OCR = dmgCR;
  var aOCR = dmgCR;
  var sOCR = dmgCR;
  var adjAtt = "";
  var adjSDC = "";

  if (dmgCR == -3) {
    if (attBonus > 4) {
      aOCR += Math.floor(Math.abs(attBonus - 3) / 2);
      adjAtt = " (+" + Math.floor(Math.abs(attBonus - 3) / 2) + " CR)"
    } else {
      adjAtt = " (+0 CR)"
    }
  } else if ((attBonus - expectedAtt) > -2) {
    aOCR += Math.floor(Math.abs(attBonus - expectedAtt) / 2);
    adjAtt = " (+" + Math.floor(Math.abs(attBonus - expectedAtt) / 2) + " CR)"
  } else {
    aOCR -= Math.floor(Math.abs(attBonus - expectedAtt) / 2);
    adjAtt = " (-" + Math.floor(Math.abs(attBonus - expectedAtt) / 2) + " CR)"
  }
  if (dmgCR == -3) {
    if (SDC > 14) {
      sOCR += Math.floor(Math.abs(SDC - 13) / 2);
      adjSDC = " (+" + Math.floor(Math.abs(SDC - 13) / 2) + " CR)"
    } else {
      adjSDC = " (+0 CR)"
    }
  } else if ((SDC - expectedSDC) > -2) {
    sOCR += Math.floor(Math.abs(SDC - expectedSDC) / 2);
    adjSDC = " (+" + Math.floor(Math.abs(SDC - expectedSDC) / 2) + " CR)"
  } else {
    sOCR -= Math.floor(Math.abs(SDC - expectedSDC) / 2);
    adjSDC = " (-" + Math.floor(Math.abs(SDC - expectedSDC) / 2) + " CR)"
  }

  if (aOCR >= sOCR) {
    OCR = aOCR;
    document.getElementById("offensiveCRbyAtt").style.color = "#000";
    document.getElementById("offensiveCRbyAttLabel").style.color = "#000";
    document.getElementById("offensiveCRbySDC").style.color = "#666";
    document.getElementById("offensiveCRbySDCLabel").style.color = "#666";
  } else {
    OCR = sOCR;
    document.getElementById("offensiveCRbyAtt").style.color = "#666";
    document.getElementById("offensiveCRbyAttLabel").style.color = "#666";
    document.getElementById("offensiveCRbySDC").style.color = "#000";
    document.getElementById("offensiveCRbySDCLabel").style.color = "#000";
  }
  if (OCR < -3) { OCR = -3; }

  document.getElementById("CRbyDmg").innerHTML = roundCR(TransformToTableValue(dmgCR), true) + "<br/><span class='smallAddendum'>(" + TransformToTableValue(dmgCR) + ")</span>";
  if (dmgCR == -3) {
    document.getElementById("DmgCRAtt").innerHTML = "&le;+3<br/><span class='smallAddendum'>" + adjAtt + "</span>";
    document.getElementById("DmgCRSDC").innerHTML = "&le;13<br/><span class='smallAddendum'>" + adjSDC + "</span>";
  } else {
    document.getElementById("DmgCRAtt").innerHTML = "+" + expectedAtt + "<br/><span class='smallAddendum'>" + adjAtt + "</span>";
    document.getElementById("DmgCRSDC").innerHTML = expectedSDC + "<br/><span class='smallAddendum'>" + adjSDC + "</span>";
  }
  document.getElementById("offensiveCRbyAtt").innerHTML = roundCR(TransformToTableValue(aOCR), true) + "<br/><span class='smallAddendum'>(" + TransformToTableValue(aOCR) + ")</span>";
  document.getElementById("offensiveCRbySDC").innerHTML = roundCR(TransformToTableValue(sOCR), true) + "<br/><span class='smallAddendum'>(" + TransformToTableValue(sOCR) + ")</span>";

  //CALCULATE FINAL CR
  document.getElementById("finalCR").innerHTML = roundCR((TransformToTableValue(DCR) + TransformToTableValue(OCR)) / 2, true) + "<br/><span class='lessSmallAddendum'>(" + ((TransformToTableValue(DCR) + TransformToTableValue(OCR)) / 2) + ")</span>";

  //CHECK AGAINST TARGET CR RANGE
  var CRCell = document.getElementById("targetCRCell");
  var finalCR = roundCR((TransformToTableValue(DCR) + TransformToTableValue(OCR)) / 2);
  if (tier == 1 && finalCR > 4) {
    CRCell.style.backgroundColor = "yellow";
  } else if (tier == 2 && (finalCR < 5 || finalCR > 10)) {
    CRCell.style.backgroundColor = "yellow";
  } else if (tier == 3 && (finalCR < 11 || finalCR > 16)) {
    CRCell.style.backgroundColor = "yellow";
  } else if (tier == 4 && finalCR < 17) {
    CRCell.style.backgroundColor = "yellow";
  } else {
    CRCell.style.backgroundColor = "white";
  }
  history.pushState({},"WC5e CR Calculator","?" + generateUrl());
}
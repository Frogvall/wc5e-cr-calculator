function addSpellsToMap(map, wotc, wc5e, coa) {
    if (wotc)
        addWotCSpells(map);
    if (wc5e)
        addWC5eSpells(map);
    if (coa)
        addCoASpells(map);
    return new Map([...map.entries()].sort());
}

// FORMATING EXAMPLE 
//
// map.set('Name', new Cantrip(baseDamage, scalingDamage, isAoE?));
// map.set('Name', new Spell(baseDamage, scalingDamage, spellLevel, isAoE?));
function addCoASpells(map) {
    
    // Azeroth
    // Cantrips
    
    map.set('Arcane Blast', new Cantrip(4.5, 4.5, false));
    map.set('Chilling Blade (1d4)', new Cantrip(7, 9, false));
    map.set('Chilling Blade (2d4)', new Cantrip(9.5, 9, false));
    map.set('Chilling Blade (3d4)', new Cantrip(12, 9, false));
    map.set('Chilling Blade (4d4)', new Cantrip(14.5, 9, false));
    map.set('Chilling Blade (1d6)', new Cantrip(8, 9, false));
    map.set('Chilling Blade (2d6)', new Cantrip(11.5, 9, false));
    map.set('Chilling Blade (3d6)', new Cantrip(15, 9, false));
    map.set('Chilling Blade (4d6)', new Cantrip(18.5, 9, false));
    map.set('Chilling Blade (6d6)', new Cantrip(25.5, 9, false));
    map.set('Chilling Blade (8d6)', new Cantrip(32.5, 9, false));
    map.set('Chilling Blade (1d8)', new Cantrip(9, 9, false));
    map.set('Chilling Blade (2d8)', new Cantrip(13.5, 9, false));
    map.set('Chilling Blade (3d8)', new Cantrip(18, 9, false));
    map.set('Chilling Blade (4d8)', new Cantrip(22.5, 9, false));
    map.set('Chilling Blade (1d10)', new Cantrip(10, 9, false));
    map.set('Chilling Blade (2d10)', new Cantrip(15.5, 9, false));
    map.set('Chilling Blade (3d10)', new Cantrip(21, 9, false));
    map.set('Chilling Blade (4d10)', new Cantrip(26.5, 9, false));
    map.set('Chilling Blade (1d12)', new Cantrip(11, 9, false));
    map.set('Chilling Blade (2d12)', new Cantrip(17.5, 9, false));
    map.set('Chilling Blade (3d12)', new Cantrip(24, 9, false));
    map.set('Chilling Blade (4d12)', new Cantrip(30.5, 9, false));
    map.set('Lightning Strike', new Cantrip(4.5, 4.5, false));
    map.set('Mind Flay', new Cantrip(4.5, 4.5, false));
    map.set('Shadow Bolt', new Cantrip(4.5, 4.5, false));
    map.set('Wrath', new Cantrip(4.5, 4.5, false));

    // Leveled

    map.set('Agony', new DoTSpell(1, true, new Spell(3.5, 3.5, 1, false), new Spell(3.5, 3.5, 1, false))); //DoT
    map.set('Arcane Barrage', new Spell(30, 10, 3, false));
    map.set('Arcane Explosion', new Spell(11, 5.5, 2, true));
    map.set('Blast Wave', new Spell(18, 4.5, 6, true));
    map.set('Channel Demonfire', new Spell(63, 10.5, 6, false, true)); //DoT, but requires your action every turn
    map.set('Comet Storm', new Spell(84, 0, 7, false)); // Assumed to hit each member in an average sized party (4)
    map.set('Conflagate', new Spell(18, 4.5, 2, false));
    map.set('Divine Star', new Spell(22,5, 4.5, 4, true));
    map.set('Ebon Bolt', new Spell(72, 0, 8, false));
    map.set('Elemental Blast', new Spell(52,5, 10.5, 6, false));
    map.set('Elemental Shock', new DoTSpell(1, false, new Spell(11, 5.5, 1, false), new Spell(5.5, 0, 1, false))); //DoT
    map.set('Faerie Swarm', new DoTSpell(3, true, new Spell(21, 3.5, 3, false), new Spell(10.5, 3.5, 3, false))); //DoT
    map.set('Frostfire Bolt', new Spell(14, 7, 1, false));
    map.set('Holy Fire', new DoTSpell(2, true, new Spell(7, 7, 2, false), new Spell(7, 7, 2, false))); //DoT
    map.set('Holy Nova', new Spell(17.5, 3.5, 6, true));
    map.set('Ice Lance', new Spell(33, 5.5, 3, false));
    map.set('Lava Burst', new Spell(14, 7, 1, false));
    map.set('Living Bomb', new Spell(27, 13.5, 2, false)); //AoE math can't handle this. Assuming 2d8 hits main target, and then explodes for 2d8 on itself and one additional target for a total of 6d8. Scaling damage is 1d8x3
    map.set('Lunar Fury', new Spell(36, 4.5, 5, false));
    map.set('Magic Orb', new DoTSpell(4, false, new Spell(22, 5.5, 4, true), new Spell(5.5, 0, 4, true))); //DoT
    map.set('Mind Blast', new Spell(16.5, 5.5, 2, false));
    map.set('Mind Sear', new DoTSpell(3, true, new Spell(10.5, 3.5, 3, true), new Spell(10.5, 3.5, 3, true))); //DoT
    map.set('Moonfire/Sunfire', new Spell(22, 11, 2, false)); //Additional damage always happen, so adding that.
    map.set('Phantom Singularity', new DoTSpell(7, true, new Spell(21, 3.5, 7, true), new Spell(21, 3.5, 7, true))); //DoT
    map.set('Pyroblast', new Spell(40.5, 4.5, 5, true)); //Treating this as AoE, as the first attack automatically crits, and the secondary damage is AoE.
    map.set('Rain of Chaos', new Spell(140, 0, 9, false)); //Assumed to hit each member in an average sized party (4), infernals not accounted for
    map.set('Rain of Fire', new Spell(16.5, 5.5, 3, true)); //DoT, but requires your action every turn
    map.set('Ring of Frost', new DoTSpell(5, true, new Spell(18, 4.5, 5, true), new Spell(18, 4.5, 5, true))); //DoT
    map.set('Shadowburn', new Spell(28, 7, 3, false));
    map.set('Shadowfury', new Spell(14, 3.5, 4, true));
    map.set('Starfall', new Spell(54, 13.5, 6, false));
    map.set('Starfire', new Spell(22, 16.5, 1, false)); //AoE math can't handle this. Assuming 2d10 hits main target, and two targets are hit with 1d10 each.
    map.set('Starsurge', new Spell(35, 7, 4, false));
    map.set('Sundering', new Spell(27, 4.5, 5, true));
    map.set('Supernova', new Spell(33, 5.5, 5, true));
    map.set('Thermal Void', new Spell(67.5, 0, 9, true));
    map.set('Thunderstorm', new Spell(22.5, 4.5, 4, true));
    map.set('Ursol\'s Vortex', new Spell(18, 4.5, 3, true));
        
    // Northrend
    // Leveled

    map.set('Chains of Ice', new Spell(9, 4.5, 1, false));
    map.set('Corpse Explosion', new Spell(7, 3.5, 1, true));
    map.set('Death and Decay', new DoTSpell(4, true, new Spell(18, 4.5, 4, true), new Spell(18, 4.5, 4, true))); //DoT
    map.set('Deathwyrm\'s Fury', new Spell(45, 0, 5, true));
    map.set('Howling Blast', new Spell(11, 4.5, 2, true));
}

function addWC5eSpells(map) {
    // WC5e Spells

    // Cantrips

    map.set('Arcane Blast', new Cantrip(4.5, 4.5, false));
    map.set('Fel Flame', new Cantrip(4.5, 4.5, false));
    map.set('Flurry', new Cantrip(7.5, 2.5, false));
    map.set('Lightning Blast', new Cantrip(4.5, 4.5, false));
    map.set('Lunar Strike', new Cantrip(5, 5, false)); //always 2 targets
    map.set('Mind Blast', new Cantrip(5.5, 5.5, false));
    map.set('Shadow Bolt', new Cantrip(6.5, 6.5, false));
    map.set('Solar Wrath', new Cantrip(4.5, 4.5, false));

    // leveled

    map.set('Arcane Barrage', new Spell(37.5, 12.5, 4, false));
    map.set('Arcane Explosion', new Spell(27, 4.5, 3, true));
    map.set('Army of the Dead', new DoTSpell(5, true, new Spell(63, 0, 5, false), new Spell(63, 0, 5, false))); //DoT
    map.set('Alextrasza\'s Fury', new Spell(42, 0, 8, true)); //Blastwave 
    map.set('Blizzard', new DoTSpell(3, true, new Spell(10.5, 3.5, 3, true), new Spell(10.5, 3.5, 3, true))); //DoT
    map.set('Blood Boil', new Spell(10, 5, 2, true));
    map.set('Cataclysm', new DoTSpell(8, false, new Spell(44.5, 0, 8, true), new Spell(12, 0, 8, true), new Spell(2.5, 0, 8, true))); //DoT
    map.set('Corpse Explosion', new Spell(7, 7, 1, true));
    map.set('Dark Void', new Spell(5, 2.5, 1, true));
    map.set('Death and Decay', new DoTSpell(4, true, new Spell(18, 4.5, 4, true), new Spell(18, 4.5, 4, true))); //DoT,
    map.set('Death Chain', new Spell(54, 0, 5, false)); //Special DoT, not quantifyable
    map.set('Deathwyrm\'s Fury', new Spell(45, 0, 5, true));
    map.set('Divine Star', new Spell(3.5, 3.5, 3, true)); //Heal for the same amount
    map.set('Drain Life', new DoTSpell(1, true, new Spell(4.5, 4.5, 1, false), new Spell(4.5, 4.5, 1, false))); //DoT
    //map.set('Dread Favor', new Spell(2.5, 0, 1, false)); //Weapon enchant, value based on one attack
    map.set('Earthen Spike', new Spell(37, 4.5, 3, true));
    map.set('Elemental Shock', new Spell(13.5, 4.5, 1, false));
    map.set('Fire and Brimstone', new Spell(33, 5.5, 4, false));
    map.set('Frostfire Bolt', new Spell(14, 7, 1, false));
    map.set('Glacial Spike', new Spell(76, 0, 7, false));
    map.set('Holy Prism', new Spell(5, 2.5, 2, true)); //Damage for 3 targets, special scaling
    map.set('Holy Wrath', new Spell(21, 3.5, 3, true));
    map.set('Howling Blast', new Spell(13.5, 4.5, 2, true));
    map.set('Ice Nova', new Spell(35, 0, 8, true));
    map.set('Icy Touch', new Spell(13.5, 4.5, 1, false));
    map.set('Lava Burst', new Spell(21, 7, 2, false));
    //map.set('Lightning Shield', new Spell(2.5, 2.5, 1, false)); //Based on beeing hit
    map.set('Living Bomb', new DoTSpell(2, true, new Spell(5.5, 0, 2, false), new Spell(7, 3.5, 2, true))); //DoT, assumed to explode on the second turn
    //map.set('Mantle of the Fallen Crusader', new Spell(2.5, 0, 3, false)); //AoE Weapon enchant, value based on one attack
    map.set('Mind Flay', new Spell(7, 3.5, 2, true));
    map.set('Pyroblast', new DoTSpell(7, false, new Spell(77, 5.5, 7, false), new Spell(5.5, 0, 7, false))); //DoT
    map.set('Rain of Fire', new Spell(19.5, 6.5, 5, true));
    map.set('Righteous Smite', new Spell(7, 3.5, 4, false));
    map.set('Shadow Crash', new Spell(36, 4.5, 5, true));
    map.set('Shadowfury', new Spell(22.5, 0, 6, false));
    map.set('Starfall', new Spell(35, 3.5, 6, true));
    map.set('Starfire', new Spell(13, 6.5, 1, false));
    map.set('Starsurge', new Spell(28, 3.5, 3, true));
    //map.set('Unholy Weapon', new Spell(54, 0, 5, false)); //value based on 2 turns with two attacks + explosion
}

function addWotCSpells(map) {
    // WotC Spells

    // Cantrips

    map.set('Acid Splash', new Cantrip(7, 7, false)); //always 2 targets
    map.set('Booming Blade (1d4)', new Cantrip(7, 9, false));
    map.set('Booming Blade (2d4)', new Cantrip(9.5, 9, false));
    map.set('Booming Blade (3d4)', new Cantrip(12, 9, false));
    map.set('Booming Blade (4d4)', new Cantrip(14.5, 9, false));
    map.set('Booming Blade (1d6)', new Cantrip(8, 9, false));
    map.set('Booming Blade (2d6)', new Cantrip(11.5, 9, false));
    map.set('Booming Blade (3d6)', new Cantrip(15, 9, false));
    map.set('Booming Blade (4d6)', new Cantrip(18.5, 9, false));
    map.set('Booming Blade (6d6)', new Cantrip(25.5, 9, false));
    map.set('Booming Blade (8d6)', new Cantrip(32.5, 9, false));
    map.set('Booming Blade (1d8)', new Cantrip(9, 9, false));
    map.set('Booming Blade (2d8)', new Cantrip(13.5, 9, false));
    map.set('Booming Blade (3d8)', new Cantrip(18, 9, false));
    map.set('Booming Blade (4d8)', new Cantrip(22.5, 9, false));
    map.set('Booming Blade (1d10)', new Cantrip(10, 9, false));
    map.set('Booming Blade (2d10)', new Cantrip(15.5, 9, false));
    map.set('Booming Blade (3d10)', new Cantrip(21, 9, false));
    map.set('Booming Blade (4d10)', new Cantrip(26.5, 9, false));
    map.set('Booming Blade (1d12)', new Cantrip(11, 9, false));
    map.set('Booming Blade (2d12)', new Cantrip(17.5, 9, false));
    map.set('Booming Blade (3d12)', new Cantrip(24, 9, false));
    map.set('Booming Blade (4d12)', new Cantrip(30.5, 9, false));
    map.set('Chill Touch', new Cantrip(4.5, 4.5, false));
    map.set('Create Bonfire', new Cantrip(4.5, 4.5, false));
    map.set('Eldritch Blast', new Cantrip(5.5, 5.5, false));
    map.set('Fire Bolt', new Cantrip(5.5, 5.5, false));
    map.set('Frostbite', new Cantrip(3.5, 3.5, false));
    map.set('Green-Flame Blade (1d4)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(2.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (2d4)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (3d4)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(7.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (4d4)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(10 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (1d6)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(3.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (2d6)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(7 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (3d6)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(10.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (4d6)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(14 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (6d6)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(21 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (8d6)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(28 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (1d8)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(4.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (2d8)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(9 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (3d8)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(13.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (4d8)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(18 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (1d10)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(5.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (2d10)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(11 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (3d10)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(16.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (4d10)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(22 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (1d12)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(6.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (2d12)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(13 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (3d12)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(19.5 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Green-Flame Blade (4d12)', new ModifierDependentCantrip((spellCastingModifier, spellCasterLevelModification) => Math.floor(26 + spellCastingModifier + 9 * spellCasterLevelModification)));
    map.set('Infestation', new Cantrip(3.5, 3.5, false));
    map.set('Lightning Lure', new Cantrip(4.5, 4.5, false));
    map.set('Mind Sliver', new Cantrip(3.5, 3.5, false));
    map.set('Poison Spray', new Cantrip(6.5, 6.5, false));
    map.set('Primal Savagery', new Cantrip(5.5, 5.5, false));
    map.set('Produce Flame', new Cantrip(4.5, 4.5, false));
    map.set('Ray of Frost', new Cantrip(4.5, 4.5, false));
    map.set('Sacred Flame', new Cantrip(4.5, 4.5, false));
    map.set('Sapping Sting', new Cantrip(2.5, 2.5, false));
    map.set('Shocking Grasp', new Cantrip(4.5, 4.5, false));
    map.set('Sword Burst', new Cantrip(3.5, 3.5, true));
    map.set('Thorn Whip', new Cantrip(3.5, 3.5, false));
    map.set('Thunderclap', new Cantrip(3.5, 3.5, true));
    map.set('Toll the Dead', new Cantrip(6.5, 6.5, false)); //assumed a creature to be always be missing HP
    map.set('Vicious Mockery', new Cantrip(2.5, 2.5, false)); 
    map.set('Word of Radiance', new Cantrip(3.5, 3.5, true)); 

    // leveled

    map.set('Abi-Dalzims Horrid Wilting', new Spell(54, 0, 8, true));
    map.set('Aganazzars Scorcher', new Spell(13.5, 4.5, 2, true));
    //map.set('Animate Objects', new Spell(, , 5, false)); //manual
    //map.set('Armor of Agathys', new Spell(, , 1, true)); //varies
    map.set('Arms of Hadar', new Spell(7, 3.5, 1, true));
    map.set('Banishing Smite', new Spell(27.5, 0, 5, false));
    //map.set('Bestow Curse', new Spell(4.5, 0, 3, false));
    map.set('Bigbys Hand', new Spell(18, 9, 5, false));
    map.set('Blade Barrier', new Spell(33, 0, 6, false));
    map.set('Blade of Disaster', new Spell(44, 0, 9, false));
    map.set('Blight', new Spell(36, 4.5, 4, false));
    map.set('Blinding Smite', new Spell(13.5, 0, 3, false));
    //map.set('Bones of the Earth', new Spell(126, 0, 6, false));
    map.set('Branding Smite', new Spell(7, 3.5, 2, false));
    map.set('Burning Hands', new Spell(10.5, 3.5, 1, true));
    map.set('Call Lightning', new Spell(16.5, 5.5, 3, true));
    map.set('Catapult', new Spell(13.5, 4.5, 1, false));
    map.set('Chain Lightning', new Spell(180, 45, 6, false));
    map.set('Chaos Bolt', new Spell(12.5, 3.5, 1, false)); //assumed to not effect another target
    map.set('Chromatic Orb', new Spell(13.5, 4.5, 1, false));
    map.set('Circle of Death', new Spell(28, 7, 6, true));
    map.set('Cloud of Daggers', new Spell(10, 5, 2, true));
    map.set('Cloudkill', new Spell(22.5, 4.5, 5, true));
    map.set('Cone of Cold', new Spell(36, 4.5, 5, true));
    map.set('Control Water', new Spell(9, 0, 4, true));
    map.set('Crown of Stars', new DoTSpell(7, false, new Spell(26, 0, 7, false), new Spell(26, 0, 7, false), new Spell(26, 0, 7, false))); //DoT
    //map.set('Crusaders Mantle', new Spell(2.5, 0, 3, false)); //AoE Weapon enchant, value based on one attack
    map.set('Dark Star', new Spell(45, 0, 8, true));
    map.set('Dawn', new Spell(22, 0, 5, true));
    map.set('Delayed Blast Fireball', new DoTSpell(7, true, new Spell(0, 0, 7, true), new Spell(0, 0, 7, true), new Spell(49, 3.5, 7, true)));
    map.set('Destructive Wave', new Spell(35, 0, 5, true));
    map.set('Disintegrate', new Spell(75, 0, 6, false));
    map.set('Dissonant Whispers', new Spell(10.5, 0, 1, false));
    //map.set('Divine Favor', new Spell(2.5, 0, 1, false)); //Weapon enchant, value based on one attack
    map.set('Dragons Breath', new Spell(10.5, 3.5, 2, true));
    //map.set('Dream', new Spell(10.5, 0, 5, false)); //not a combat spell
    map.set('Dust Devil', new Spell(4.5, 4.5, 2, true));
    map.set('Earth Tremor', new Spell(3.5, 3.5, 1, true));
    //map.set('Earthquake', new Spell(, , 8, true));
    //map.set('Elemental Bane', new Spell(, , 1, false));
    //map.set('Elemental Weapon', new Spell(2.5, 0.75, 1, false)); //??
    map.set('Enervation', new Spell(18, 4.5, 5, false)); //DoT
    map.set('Ensnaring Strike', new Spell(3.5, 3.5, 1, false));
    map.set('Erupting Earth', new Spell(19.5, 6.5, 3, true));
    map.set('Evards Black Tentacles', new Spell(10.5, 0, 4, true));
    map.set('Finger of Death', new Spell(61.5, 0, 7, false));
    //map.set('Fire Shield', new Spell(9, 0, 4, false)); //Based on beeing hit
    map.set('Fire Storm', new Spell(38.5, 0, 7, true));
    map.set('Fireball', new Spell(28, 3.5, 3, true));
    //map.set('Flame Arrows', new Spell(3.5, 0, 3, false)); //Weapon enchant, value based on one attack
    //map.set('Flame Blade', new Spell(10.5, 3.5, 2, false)); //Weapon enchant, value based on one attack
    map.set('Flame Strike', new Spell(28, 3.5, 5, true));
    map.set('Flaming Sphere', new Spell(7, 3.5, 2, true));
    //map.set('Forbiddance', new Spell(27.5, 0, 6, true));
    map.set('Frost Fingers', new Spell(9, 4.5, 1, true));
    //map.set('Geas', new Spell(27.5, 0, 5, false));
    map.set('Glyph of Warding', new Spell(22.5, 4.5, 3, true));
    map.set('Gravity Fissure', new Spell(36, 4.5, 6, true));
    map.set('Gravity Sinkhole', new Spell(27.5, 5.5, 4, true));
    map.set('Guardian of Faith', new Spell(60, 0, 4, false));
    map.set('Guiding Bolt', new Spell(14, 3.5, 1, false));
    map.set('Hail of Thorns', new Spell(5.5, 5.5, 1, true));
    map.set('Harm', new Spell(49, 0, 6, false));
    map.set('Heat Metal', new DoTSpell(2, true, new Spell(9, 4.5, 2, false), new Spell(9, 4.5, 2, false))); //DoT
    //map.set('Hellish Rebuke', new Spell(11, 5.5, 1, false)); //outside of the action economy handled in this calculator
    //map.set('Hex', new Spell(3.5, 0, 1, false));
    //map.set('Holy Weapon', new Spell(36, 0, 5, false)); //value based on 2 turns with two attacks + explosion
    map.set('Hunger of Hadar', new Spell(14, 0, 3, true));
    map.set('Ice Knife', new Spell(19.5, 3.5, 1, false)); //5.5+14
    map.set('Ice Storm', new Spell(23, 4.5, 4, true));
    map.set('Illusory Dragon', new Spell(24.5, 0, 8, false));
    map.set('Immolation', new DoTSpell(5, true, new Spell(28, 0, 5, false), new Spell(14, 0, 5, false))); //DoT
    map.set('Incendiary Cloud', new Spell(45, 0, 8, true));
    map.set('Inflict Wounds', new Spell(16.5, 5.5, 1, false));
    map.set('Insect Plague', new Spell(22, 5.5, 5, true));
    map.set('Jims Magic Missile', new Spell(15, 5, 1, false));
    map.set('Life Transference', new Spell(18, 4.5, 3, false));
    map.set('Lightning Arrow', new ComplexSpell(3, spellSlotUsed => Math.floor(18 + 4.5*(spellSlotUsed-3)) + Math.floor(9 + 4.5*(spellSlotUsed-3)) * 2));
    map.set('Lightning Bolt', new Spell(28, 3.5, 3, true));
    map.set('Maddening Darkness', new DoTSpell(8, false, new Spell(36, 0, 8, true), new Spell(36, 0, 8, true), new Spell(36, 0, 8, true))); //DoT
    map.set('Maelstrom', new Spell(21, 0, 5, true));
    map.set('Magic Missile', new Spell(10.5, 3.5, 1, false));
    map.set('Magnify Gravity', new Spell(9, 4.5, 1, true));
    map.set('Maximilian\'s Earthen Grasp', new Spell(7, 0, 2, false)); //DoT, but requires your action every turn
    map.set('Melf\'s Acid Arrow', new Spell(15, 2.5, 2, false));
    map.set('Melf\'s Minute Meteors', new DoTSpell(3, true, new Spell(14, 0, 3, true), new Spell(14, 0, 3, true))); //DoT
    map.set('Mental Prison', new Spell(27.5, 0, 6, false)); 
    map.set('Meteor Swarm', new Spell(560, 0, 9, false)); //Assumed to hit each member in an average sized party (4)
    map.set('Mind Spike', new Spell(13.5, 4.5, 2, false));
    map.set('Moonbeam', new Spell(11, 5.5, 2, true));
    map.set('Mordenkainen\'s Faithful Hound', new Spell(18, 0, 4, false));
    map.set('Mordenkainen\'s Sword', new DoTSpell(7, true, new Spell(16.5, 0, 7, false), new Spell(16.5, 0, 7, false))); //DoT
    map.set('Negative Energy Flood', new Spell(32.5, 0, 5, false)); 
    map.set('Otilukes Freezing Sphere', new Spell(35, 3.5, 6, true));
    map.set('Phantasmal Force', new DoTSpell(2, true, new Spell(3.5, 0, 2, false), new Spell(3.5, 0, 2, false))); //DoT
    map.set('Phantasmal Killer', new DoTSpell(4, true, new Spell(22, 5.5, 4, false), new Spell(22, 5.5, 4, false))); //DoT
    map.set('Prismatic Spray', new Spell(70, 0, 7, true)); //Assumes both targets roll 8 and then rolls two damaging rays
    map.set('Psychic Scream', new Spell(49, 0, 9, true)); 
    map.set('Pulse Wave', new Spell(21, 3.5, 5, true));
    map.set('Ravenous Void', new Spell(27.5, 0, 9, true));
    map.set('Ray of Sickness', new Spell(9, 4.5, 1, false)); 
    map.set('Reality Break', new DoTSpell(8, true, new Spell(65, 0, 8, false), new Spell(65, 0, 8, false))); //DoT
    map.set('Scorching Ray', new Spell(21, 7, 2, false)); 
    map.set('Booming Blade (1d4)', new Cantrip(7, 9, false));
    map.set('Booming Blade (2d4)', new Cantrip(9.5, 9, false));
    map.set('Booming Blade (3d4)', new Cantrip(12, 9, false));
    map.set('Booming Blade (4d4)', new Cantrip(14.5, 9, false));
    map.set('Booming Blade (1d6)', new Cantrip(8, 9, false));
    map.set('Booming Blade (2d6)', new Cantrip(11.5, 9, false));
    map.set('Booming Blade (3d6)', new Cantrip(15, 9, false));
    map.set('Booming Blade (4d6)', new Cantrip(18.5, 9, false));
    map.set('Booming Blade (6d6)', new Cantrip(25.5, 9, false));
    map.set('Booming Blade (8d6)', new Cantrip(32.5, 9, false));
    map.set('Booming Blade (1d8)', new Cantrip(9, 9, false));
    map.set('Booming Blade (2d8)', new Cantrip(13.5, 9, false));
    map.set('Booming Blade (3d8)', new Cantrip(18, 9, false));
    map.set('Booming Blade (4d8)', new Cantrip(22.5, 9, false));
    map.set('Booming Blade (1d10)', new Cantrip(10, 9, false));
    map.set('Booming Blade (2d10)', new Cantrip(15.5, 9, false));
    map.set('Booming Blade (3d10)', new Cantrip(21, 9, false));
    map.set('Booming Blade (4d10)', new Cantrip(26.5, 9, false));
    map.set('Booming Blade (1d12)', new Cantrip(11, 9, false));
    map.set('Booming Blade (2d12)', new Cantrip(17.5, 9, false));
    map.set('Booming Blade (3d12)', new Cantrip(24, 9, false));
    map.set('Booming Blade (4d12)', new Cantrip(30.5, 9, false));
    map.set('Searing Smite (1d4)', new DoTSpell(1, true, new Spell(9.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (2d4)', new DoTSpell(1, true, new Spell(12, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (3d4)', new DoTSpell(1, true, new Spell(14.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (4d4)', new DoTSpell(1, true, new Spell(17, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (1d6)', new DoTSpell(1, true, new Spell(10.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (2d6)', new DoTSpell(1, true, new Spell(14, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (3d6)', new DoTSpell(1, true, new Spell(17.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (4d6)', new DoTSpell(1, true, new Spell(21, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (6d6)', new DoTSpell(1, true, new Spell(28, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (8d6)', new DoTSpell(1, true, new Spell(35, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (1d8)', new DoTSpell(1, true, new Spell(11.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (2d8)', new DoTSpell(1, true, new Spell(16, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (3d8)', new DoTSpell(1, true, new Spell(20.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (4d8)', new DoTSpell(1, true, new Spell(25, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (1d10)', new DoTSpell(1, true, new Spell(12.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (2d10)', new DoTSpell(1, true, new Spell(18, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (3d10)', new DoTSpell(1, true, new Spell(23.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (4d10)', new DoTSpell(1, true, new Spell(29, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (1d12)', new DoTSpell(1, true, new Spell(13.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (2d12)', new DoTSpell(1, true, new Spell(20, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (3d12)', new DoTSpell(1, true, new Spell(26.5, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    map.set('Searing Smite (4d12)', new DoTSpell(1, true, new Spell(33, 3.5, 1, false), new Spell(3.5, 0, 1, false))); //DoT
    //map.set('Shadow Blade', new Spell(9, 2.25, 2, false)); //Weapon enchant, value based on one attack, scales every 2 level
    //map.set('Shadow of Moil', new Spell(9, 0, 4, false)); //Based on beeing hit
    map.set('Shatter', new Spell(13.5, 4.5, 2, true));
    map.set('Sickening Radiance', new Spell(22, 0, 4, true));
    map.set('Snillocs Snowball Swarm', new Spell(10.5, 3.5, 2, true));
    //map.set('Spike Growth', new Spell(5, 0, 2, false)); //Based on feet traveled
    map.set('Snillocs Snowball Swarm', new Spell(13.5, 4.5, 3, true));
    //map.set('Spiritual Weapon', new Spell(7.5, 4.5, 2, false)); //DoT, assumed mod +3
    map.set('Staggering Smite', new Spell(14, 0, 4, false));
    map.set('Steel Wind Strike', new Spell(33, 0, 5, true)); 
    //map.set('Storm of Vengeance', new Spell(, , , true)); //Just to much stuff
    map.set('Storm Sphere', new Spell(28, 3.5, 4, false)); //2d6 AoE, 4d6 single target
    map.set('Sunbeam', new Spell(27, 0, 6, true)); //DoT, but requires your action every turn
    map.set('Sunburst', new Spell(42, 0, 8, true));
    //map.set('Symbol', new Spell(55, 0, 7, true)); //not a combat spell
    map.set('Synaptic Static', new Spell(28, 0, 5, true));
    map.set('Tasha\'s Caustic Brew', new DoTSpell(1, true, new Spell(5, 5, 1, true), new Spell(5, 5, 1, true))); //DoT
    map.set('Tasha\'s Mind Whip', new Spell(10.5, 10.5, 2, false));
    //map.set('Tensers Transformation', new Spell(13, 0, 6, false)); //Weapon enchant, value based on two attacks
    map.set('Synaptic Static', new Spell(16.5, 5.5, 3, true));
    map.set('Thunderous Smite', new Spell(7, 0, 1, false));
    map.set('Thunderwave', new Spell(9, 4.5, 1, true));
    map.set('Tidal Wave', new Spell(18, 0, 3, true));
    map.set('Time Ravage', new Spell(65, 0, 9, false));
    map.set('Transmute Rock', new Spell(18, 0, 5, true));
    map.set('Tsunami', new DoTSpell(8, true, new Spell(33, 0, 8, true), new Spell(27.5, 0, 8, true))); //DoT
    map.set('Vampiric Touch', new Spell(10.5, 3.5, 3, false));
    map.set('Vitriolic Sphere', new Spell(37.5, 5, 4, true));
    map.set('Wall of Fire', new DoTSpell(4, true, new Spell(22.5, 4.5, 4, true), new Spell(22.5, 4.5, 4, true))); //DoT
    map.set('Wall of Ice', new Spell(35, 7, 6, true)); //only inital damage 10d6, passing through the wall does 5d6 + 1d6 per level
    map.set('Wall of Light', new Spell(36, 4.5, 5, true)); //DoT, but requires your action every turn
    map.set('Wall of Thorns', new Spell(31.5, 4.5, 6, true)); //only inital damage 7d8, passing through the wall does 7d8
    map.set('Weird', new Spell(22, 0, 9, true));
    map.set('Whirlwind', new DoTSpell(7, true, new Spell(35, 0, 7, true), new Spell(35, 0, 7, true))); //DoT
    map.set('Wind Wall', new Spell(13.5, 0, 3, true));
    map.set('Witch Bolt', new Spell(6.5, 6.5, 1, false)); //DoT, but requires your action every turn
    map.set('Wrath of Nature', new DoTSpell(5, true, new Spell(41.5, 0, 5, false), new Spell(41.5, 0, 5, false))); //DoT, 4d6 AoE, 3d8 single target
    map.set('Thunderous Smite', new Spell(3.5, 0, 1, false));
    map.set('Zephyr Strike', new Spell(4.5, 0, 1, false));
}
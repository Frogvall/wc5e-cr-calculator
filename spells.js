function addSpellsToMap(map){
    map.set('Lunar Strike', new Cantrip(5, 5, false));
    map.set('Solar Wrath', new Cantrip(4.5, 4.5, false));
    map.set('Starfall', new Spell(35, 3.5, 6, true));
    map.set('Starfire', new Spell(13, 6.5, 1, false));
    return map;
}
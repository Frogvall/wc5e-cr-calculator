function swapTable(clickedCheckbox) {
    if (document.getElementById(clickedCheckbox).checked) {
        if (clickedCheckbox == 'officialTable') {
            document.getElementById('wc5eTable').checked = false
            document.getElementById('2024Table').checked = false
            document.getElementById('legendaryDragon').disabled = true
        }
        else if (clickedCheckbox == 'wc5eTable') {
            document.getElementById('officialTable').checked = false
            document.getElementById('2024Table').checked = false
            document.getElementById('legendaryDragon').disabled = true
        }
        else if (clickedCheckbox == '2024Table') {
            document.getElementById('officialTable').checked = false
            document.getElementById('wc5eTable').checked = false
            document.getElementById('legendaryDragon').disabled = false
        }
    }
    else {
        if (clickedCheckbox == 'officialTable') {
            document.getElementById('officialTable').checked = true
            document.getElementById('legendaryDragon').disabled = true
        }
        else if (clickedCheckbox == 'wc5eTable') {
            document.getElementById('wc5eTable').checked = true
            document.getElementById('legendaryDragon').disabled = true
        }
        else if (clickedCheckbox == '2024Table') {
            document.getElementById('2024Table').checked = true
            document.getElementById('legendaryDragon').disabled = false
        }
    }
    Calculate()
}

function getWC5eStats() {
    if (typeof window.wc5eStatsTable === 'undefined' || window.wc5eStatsTable === null) {
        window.wc5eStatsTable = new MonsterMap2014(true);
    }
    return window.wc5eStatsTable;
}

function getOfficial2014Stats() {
    if (typeof window.official2014StatsTable === 'undefined' || window.official2014StatsTable === null) {
        window.official2014StatsTable = new MonsterMap2014(false);
    }
    return window.official2014StatsTable;
}

function getBlogOfHolding2024Stats() {
    if (typeof window.bagOfHolding2024StatsTable === 'undefined' || window.bagOfHolding2024StatsTable === null)
        window.bagOfHolding2024StatsTable = new MonsterMap2024();
    return window.bagOfHolding2024StatsTable;
}

class MonsterMap2014 extends Map {
    constructor(isWc5e) {
        super();
        this.isWc5e = isWc5e;
        super.set(-3, new MonsterStat(2, 13, 1, 6, 3, 0, 1, 13));
        super.set(-2, new MonsterStat(2, 13, 7, this.getMaxHitPoints(-2), 3, 2, 3, 13));
        super.set(-1, new MonsterStat(2, 13, this.getMaxHitPoints(-2)+1, this.getMaxHitPoints(-1), 3, 4, 5, 13));
        super.set(0, new MonsterStat(2, 13, this.getMaxHitPoints(-1)+1, this.getMaxHitPoints(0), 3, 6, 8, 13));
        super.set(1, new MonsterStat(2, 13, this.getMaxHitPoints(0)+1, 85, 3, 9, 14, 13));
        super.set(2, new MonsterStat(2, 13, 86, 100, 3, 15, 20, 13));
        super.set(3, new MonsterStat(2, 13, 101, 115, 4, 21, 26, 13));
        super.set(4, new MonsterStat(2, 14, 116, 130, 5, 27, 32, 14));
        super.set(5, new MonsterStat(3, 15, 131, 145, 6, 33, 38, 15));
        super.set(6, new MonsterStat(3, 15, 146, 160, 6, 39, 44, 15));
        super.set(7, new MonsterStat(3, 15, 161, 175, 6, 45, 50, 15));
        super.set(8, new MonsterStat(3, 16, 176, 190, 7, 51, 56, 16));
        super.set(9, new MonsterStat(4, 16, 191, 205, 7, 57, 62, 16));
        super.set(10, new MonsterStat(4, 17, 206, 220, 7, 63, 68, 16));
        super.set(11, new MonsterStat(4, 17, 221, 235, 8, 69, 74, 17));
        super.set(12, new MonsterStat(4, 17, 236, 250, 8, 75, 80, 17));
        super.set(13, new MonsterStat(5, 18, 251, 265, 8, 81, 86, 18));
        super.set(14, new MonsterStat(5, 18, 266, 280, 8,  87, 92, 18));
        super.set(15, new MonsterStat(5, 18, 281, 295, 8,  93, 98, 18));
        super.set(16, new MonsterStat(5, 18, 296, 310, 9,  99, 104, 18));
        super.set(17, new MonsterStat(6, 19, 311, 325, 10, 105, 110, 19));
        super.set(18, new MonsterStat(6, 19, 326, 340, 10, 111, 116, 19));
        super.set(19, new MonsterStat(6, 19, 341, 355, 10, 117, 122, 19));
        super.set(20, new MonsterStat(6, 19, 356, 400, 10, 123, 140, 19));
        super.set(21, new MonsterStat(7, 19, 401, 445, 11, 141, 158, 20));
        super.set(22, new MonsterStat(7, 19, 446, 490, 11, 159, 176, 20));
        super.set(23, new MonsterStat(7, 19, 491, 535, 11, 177, 194, 20));
        super.set(24, new MonsterStat(7, 19, 536, 580, 12, 195, 212, 21));
        super.set(25, new MonsterStat(8, 19, 581, 625, 12, 213, 230, 21));
        super.set(26, new MonsterStat(8, 19, 626, 670, 12, 231, 248, 21));
        super.set(27, new MonsterStat(8, 19, 671, 715, 13, 249, 266, 22));
        super.set(28, new MonsterStat(8, 19, 716, 760, 13, 267, 284, 22));
        super.set(29, new MonsterStat(9, 19, 761, 805, 13, 285, 302, 22));
        super.set(30, new MonsterStat(9, 19, 806, 850, 14, 303, 320, 23));
    }

    getMaxHitPoints(cr) {
        switch (cr) {
            case -2:
                return this.isWc5e ? 18 : 35;
            case -1:
                return this.isWc5e ? 30 : 49;
            case 0:
                return this.isWc5e ? 50 : 70;
            default:
                return -1
        }
    }

    dcrByHP(hp) {
        for (let i = -3; i < 20; i++) {
            stats = super.get(i);
            if (hp <= stats.hitPointsMax)
                return i;
        }
        return 20 + Math.floor((hp - 356) / 45);
    }

    acForHPCR(hpcr, actualAC) {
        if (hpcr <= -3) {
            return Math.min(actualAC, super.get(-3).armorClass);
        } else if (hpcr < 31) {
            return super.get(hpcr).armorClass;
        } else {
            return 19;
        }
    }

    ocrByDmg(dmg) {
        for (let i = -3; i < 20; i++) {
            stats = super.get(i);
            if (dmg <= stats.damagePerRoundMax)
                return i;
        }
        return 20 + Math.floor((dmg - 123) / 18);
    }

    attForDmgCR(dmgcr, actualAB) {
        if (dmgcr <= -3) {
            return Math.min(actualAB, super.get(-3).attackBonus);
        } else if (dmgcr < 31) {
            return super.get(dmgcr).attackBonus;
        } else {
            return Math.floor(dmgcr/3.0)+4
        }
    }

    sdcForDmgCR(dmgcr) {
        if (dmgcr <= -3) {
            return Math.min(actualAB, super.get(-3).saveDC);
        } else if (dmgcr < 31) {
            return super.get(dmgcr).saveDC;
        } else {
            return Math.floor(dmgcr/3.0)+13
        }
    }
}

class MonsterMap2024 extends Map {
    constructor() {
        super()
        super.set(-3, new MonsterStat(2, 13, 1, 6, 2, 0, 1, 9));
        super.set(-2, new MonsterStat(2, 13, 7, 12, 3, 2, 4, 10));
        super.set(-1, new MonsterStat(2, 13, 13, 18, 3, 5, 7, 10));
        super.set(0, new MonsterStat(2, 14, 19, 24, 4, 8, 10, 11));
        super.set(1, new MonsterStat(2, 14, 25, 37, 4, 11, 14, 11));
        for (let i = 2; i < 31; i++) {
            const pb = Math.ceil(i/4.0)+1
            const ac = Math.floor(i/3.0)+14
            const hp = i < 21 ? i*15+15 : (i-20)*50+315
            const hpMinus = i < 21 ? 7 : i === 21 ? 42 : 25
            const hpPlus = i < 21 ? 7 : 24
            const ab = Math.floor(i/2.0)+4
            const dmg = i*6+6
            const dc = Math.floor(i/2.0)+11
            super.set(i, new MonsterStat(pb, ac, hp-hpMinus, hp+hpPlus, ab, dmg-3, dmg+2, dc))
        }
    }

    dcrByHP(hp) {
        for (let i = -3; i < 22; i++) {
            stats = super.get(i);
            if (hp <= stats.hitPointsMax)
                return i;
        }
        return 22+Math.floor((hp-390)/50)
    }

    acForHPCR(hpcr, actualAC) {
        if (hpcr <= -3) {
            return Math.min(actualAC, super.get(-3).armorClass);
        } else if (hpcr < 31) {
            return super.get(hpcr).armorClass;
        } else {
            return Math.floor(hpcr/3.0)+14
        }
    }

    ocrByDmg(dmg) {
        for (let i = -3; i < 2; i++) {
            stats = super.get(i);
            if (dmg <= stats.damagePerRoundMax)
                return i;
        }
        return 2+Math.floor((dmg-15)/6)
    }

    attForDmgCR(dmgcr, actualAB) {
        if (dmgcr <= -3) {
            return Math.min(actualAB, super.get(-3).attackBonus);
        } else if (dmgcr < 31) {
            return super.get(dmgcr).attackBonus;
        } else {
            return Math.floor(dmgcr/2.0)+4
        }
    }

    sdcForDmgCR(dmgcr) {
        if (dmgcr <= -3) {
            return Math.min(actualAB, super.get(-3).saveDC);
        } else if (dmgcr < 31) {
            return super.get(dmgcr).saveDC;
        } else {
            return Math.floor(dmgcr/2.0)+11
        }
    }
}

class MonsterStat {
    constructor(profBonus, armorClass, hitPointsMin, hitPointsMax, attackBonus, damagePerRoundMin, damagePerRoundMax, saveDC) {
        this.profBonus = profBonus;
        this.armorClass = armorClass;
        this.hitPointsMin = hitPointsMin;
        this.hitPointsMax = hitPointsMax;
        this.attackBonus = attackBonus;
        this.damagePerRoundMin = damagePerRoundMin;
        this.damagePerRoundMax = damagePerRoundMax;
        this.saveDC = saveDC;
    }
}

function getStatsTableMap() {
    if (document.getElementById('wc5eTable').checked)
        return getWC5eStats();
    if (document.getElementById('officialTable').checked)
        return getOfficial2014Stats();
    if (document.getElementById('2024Table').checked)
        return getBlogOfHolding2024Stats();
    return null;
}

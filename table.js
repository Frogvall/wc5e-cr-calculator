function swapTable(clickedCheckbox) {
    if (document.getElementById(clickedCheckbox).checked) {
        if (clickedCheckbox == 'officialTable') {
            document.getElementById('wc5eTable').checked = false
        }
        else if (clickedCheckbox == 'wc5eTable') {
            document.getElementById('officialTable').checked = false
        }
    }
    else {
        if (clickedCheckbox == 'officialTable') {
            document.getElementById('wc5eTable').checked = true
        }
        else if (clickedCheckbox == 'wc5eTable') {
            document.getElementById('officialTable').checked = true
        }
    }
    Calculate()
}

function isWC5eTableUsed() {
    return document.getElementById("wc5eTable").checked
}

function getMaxHitPoints(isWc5e, cr) {
    switch (cr) {
        case -2:
            return isWc5e ? 18 : 35;
        case -1:
            return isWc5e ? 30 : 49;
        case 0:
            return isWc5e ? 50 : 70;
        default:
            return -1
    }
}

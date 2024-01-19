function ConvertSecondsToDHMS(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "Invalid input";
    }

    var days = Math.floor(seconds / 86400);
    var hours = Math.floor((seconds % 86400) / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedDays = ("0" + days).slice(-2);
    var formattedHours = ("0" + hours).slice(-2);
    var formattedMinutes = ("0" + minutes).slice(-2);
    var formattedSeconds = ("0" + remainingSeconds).slice(-2);

    return formattedDays + ":" + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

function CalculateThoiSat(quantity) {
    return {
        quangSat: quantity * data.thoiSat.quangSat,
        quangHongNgoc: quantity * data.thoiSat.quangHongNgoc
    }
}
function CalculateThoiDong(quantity) {
    return {
        quangDong: quantity * data.thoiDong.quangDong,
        quangHongNgoc: quantity * data.thoiDong.quangHongNgoc
    }
}
function CalculateThoiBac(quantity) {
    return {
        quangBac: quantity * data.thoiBac.quangBac,
        quangHongNgoc: quantity * data.thoiBac.quangHongNgoc
    }
}
function CalculateThoiBacDNCC(quantity) {
    return {
        thoiBac: quantity * data.thoiBacDNCC.thoiBac,
        quangBichNgoc: quantity * data.thoiBacDNCC.quangBichNgoc
    }
}
function CalculateLumion(quantity) {
    return {
        quangLamNgoc: quantity * data.lumion.quangLamNgoc,
        quangBichNgoc: quantity * data.lumion.quangBichNgoc
    }
}
function CalculateBasicConstructionKit(quantity) {
    return {
        vanGoThong: quantity * data.basicConstructionKit.vanGoThong,
        thoiSat: quantity * data.basicConstructionKit.thoiSat,
        thoiDong: quantity * data.basicConstructionKit.thoiDong
    }
}
function CalculateIntermediateConstructionKit(quantity) {
    return {
        basicConstructionKit: quantity * data.intermediateConstructionKit.basicConstructionKit,
        vanGoSoi: quantity * data.intermediateConstructionKit.vanGoSoi,
        thoiBacDNCC: quantity * data.intermediateConstructionKit.thoiBacDNCC
    }
}
function CalculateAdvancedConstructionKit(quantity) {
    return {
        intermediateConstructionKit: quantity * data.advancedConstructionKit.intermediateConstructionKit,
        vanGoTech: quantity * data.advancedConstructionKit.vanGoTech,
        lumion: quantity * data.advancedConstructionKit.lumion
    }
}
function CalculateVanGoThong(quantity) {
    return {
        goThong: quantity * 3
    }
}
function CalculateVanGoSoi(quantity) {
    return {
        goThong: quantity * 2,
        goSoi: quantity * 3
    }
}
function CalculateVanGoTech(quantity) {
    return {
        goSoi: quantity * 2,
        goTech: quantity * 6
    }
}


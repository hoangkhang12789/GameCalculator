quantityAdvanced.addEventListener("change", e => {
    let advanced = CalculateAdvancedConstructionKit(quantityAdvanced.value);
    quantityIntermediate.value = advanced.intermediateConstructionKit;
    triggerChangeEvent(quantityIntermediate);
    quantityVanGoTech.value = advanced.vanGoTech;
    triggerChangeEvent(quantityVanGoTech);
    quantityLumion.value = advanced.lumion;
    triggerChangeEvent(quantityLumion)

})
quantityIntermediate.addEventListener("change", e => {
    let intermediate = CalculateIntermediateConstructionKit(quantityIntermediate.value)
    quantityBasic.value = intermediate.basicConstructionKit;
    triggerChangeEvent(quantityBasic);
    quantityVanGoSoi.value = intermediate.vanGoSoi;
    triggerChangeEvent(quantityVanGoSoi);
    quantityThoiBacDNCC.value = intermediate.thoiBacDNCC
    triggerChangeEvent(quantityThoiBacDNCC)
})
quantityLumion.addEventListener("change", e => {
    let lumion = CalculateLumion(quantityLumion.value)
    quantityQuangLamNgoc.value = lumion.quangLamNgoc;
    triggerChangeEvent(quantityQuangLamNgoc);
    quantityQuangBichNgoc.value = parseInt(quantityQuangBichNgoc.value) + parseInt(lumion.quangBichNgoc);
})

quantityBasic.addEventListener("change", e => {
    let basic = CalculateBasicConstructionKit(quantityBasic.value)
    quantityVanGoThong.value = basic.vanGoThong;
    triggerChangeEvent(quantityVanGoThong);
    quantityThoiSat.value = basic.thoiSat;
    triggerChangeEvent(quantityThoiSat)
    quantityThoiDong.value = basic.thoiDong;
    triggerChangeEvent(quantityThoiDong)
})
quantityThoiBacDNCC.addEventListener("change", e => {
    let thoiBacDNCC = CalculateThoiBacDNCC(quantityThoiBacDNCC.value)
    quantityThoiBac.value = thoiBacDNCC.thoiBac;
    triggerChangeEvent(quantityThoiBac);
    quantityQuangBichNgoc.value = parseInt(quantityQuangBichNgoc.value) + parseInt(thoiBacDNCC.quangBichNgoc);
})
quantityThoiDong.addEventListener("change", e => {
    let thoiDong = CalculateThoiDong(quantityThoiDong.value);
    quantityQuangDong.value = thoiDong.quangDong
    quantityQuangHongNgoc.value = parseInt(quantityQuangHongNgoc.value) + parseInt(thoiDong.quangHongNgoc);
})
quantityThoiBac.addEventListener("change", e => {
    let thoiBac = CalculateThoiBac(quantityThoiBac.value)
    quantityQuangBac.value = thoiBac.quangBac;
    quantityQuangHongNgoc.value = parseInt(quantityQuangHongNgoc.value) + parseInt(thoiBac.quangHongNgoc);
})
quantityThoiSat.addEventListener("change", e => {
    let thoiSat = CalculateThoiSat(quantityThoiSat.value)
    quantityQuangSat.value = thoiSat.quangSat;
    quantityQuangHongNgoc.value = parseInt(quantityQuangHongNgoc.value) + parseInt(thoiSat.quangHongNgoc);
})
quantityVanGoSoi.addEventListener("change", e => {
    let vanGoSoi = CalculateVanGoSoi(quantityVanGoSoi.value);
    quantityGoThong.value = parseInt(quantityGoThong.value) + parseInt(vanGoSoi.goThong);
    quantityGoSoi.value = parseInt(quantityGoSoi.value) + parseInt(vanGoSoi.goSoi);
})
quantityVanGoThong.addEventListener("change", e => {
    let vanGoThong = CalculateVanGoThong(quantityVanGoThong.value);
    quantityGoThong.value = parseInt(quantityGoThong.value) + parseInt(vanGoThong.goThong);
})
quantityVanGoTech.addEventListener("change", e => {
    let vanGoTech = CalculateVanGoTech(quantityVanGoTech.value);
    quantityGoTech.value = parseInt(quantityGoTech.value) + parseInt(vanGoTech.goTech);
    quantityGoSoi.value = parseInt(quantityGoSoi.value) + parseInt(vanGoTech.goSoi);
})
function triggerChangeEvent(element) {
    var event = new Event('change', {
        bubbles: true,
        cancelable: true,
    });
    element.dispatchEvent(event);
}
goTech.forEach((element, index) => {
    element.addEventListener("change", e => {
        let time = parseInt(element.querySelector("input").value) * data.vanGoTech[index].time
        element.querySelectorAll("label")[1].textContent = ConvertSecondsToDHMS(time);
    })
})
goSoi.forEach((element, index) => {
    element.addEventListener("change", e => {
        let time = parseInt(element.querySelector("input").value) * data.vanGoSoi[index].time
        element.querySelectorAll("label")[1].textContent = ConvertSecondsToDHMS(time);
    })
})
goThong.forEach((element, index) => {
    element.addEventListener("change", e => {
        let time = parseInt(element.querySelector("input").value) * data.vanGoThong[index].time
        element.querySelectorAll("label")[1].textContent = ConvertSecondsToDHMS(time);
    })
})
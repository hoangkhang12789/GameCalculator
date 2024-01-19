let quantityAdvanced = document.getElementById("Advanced")
let quantityIntermediate = document.getElementById("Intermediate")
let quantityBasic = document.getElementById("Basic")
let quantityLumion = document.getElementById("Lumion")
let quantityQuangLamNgoc = document.getElementById("QuangLamNgoc")
let quantityQuangBichNgoc = document.getElementById("QuangBichNgoc")
let quantityQuangHongNgoc = document.getElementById("QuangHongNgoc")
let quantityQuangBac = document.getElementById("QuangBac")
let quantityQuangDong = document.getElementById("QuangDong")
let quantityQuangSat = document.getElementById("QuangSat")
let quantityThoiSat = document.getElementById("ThoiSat")
let quantityThoiDong = document.getElementById("ThoiDong")
let quantityThoiBac = document.getElementById("ThoiBac")
let quantityThoiBacDNCC = document.getElementById("ThoiBacDNCC")
let quantityVanGoTech = document.getElementById("VanGoTech")
let quantityVanGoSoi = document.getElementById("VanGoSoi")
let quantityVanGoThong = document.getElementById("VanGoThong")
let quantityGoTech = document.getElementById("GoTech")
let quantityGoSoi = document.getElementById("GoSoi")
let quantityGoThong = document.getElementById("GoThong")
let goTech = document.querySelector(".vanGoTech").querySelectorAll(".type")
let goSoi = document.querySelector(".vanGoSoi").querySelectorAll(".type")
let goThong = document.querySelector(".vanGoThong").querySelectorAll(".type")
let data;
fetch('https://hoangkhang12789.github.io/JsonServer/dragonsiege.json')
    .then((response) => response.json())
    .then((json) => {
        data = json;
        data.vanGoTech.forEach((element, index) => {
            goTech[index].querySelectorAll("label")[0].textContent = element.type
        })
        data.vanGoSoi.forEach((element, index) => {
            goSoi[index].querySelectorAll("label")[0].textContent = element.type
        })
        data.vanGoThong.forEach((element, index) => {
            goThong[index].querySelectorAll("label")[0].textContent = element.type
        })
    });

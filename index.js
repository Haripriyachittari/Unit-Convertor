/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input-el');
const lengthEl = document.querySelector('.length');
const volumeEl = document.querySelector('.volume');
const massEl = document.querySelector('.mass');
const convertEl = document.getElementById('convert-el');
const dark=document.getElementById('dark-theme');
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;


convertEl.addEventListener('click', function () {

    let inputVal = inputEl.value;

    let length = `${inputVal} meters  = ${(inputVal * meterToFeet).toFixed(3)} feet | ${inputVal} feet = ${(inputVal / meterToFeet).toFixed(3)} meters`

    let volume = `${inputVal} liters  = ${(inputVal * literToGallon).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal / literToGallon).toFixed(3)} liters`

    let mass = `${inputVal} kilos = ${(inputVal * kiloToPound).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal / kiloToPound).toFixed(3)} kilos`

    lengthEl.innerHTML = length;
    volumeEl.innerHTML = volume;
    massEl.innerHTML = mass;
})

dark.addEventListener('click', function(){
    
    document.body.classList.toggle('darktheme');
    if(document.body.classList.contains('darktheme'))
    {
        dark.classList.replace('fa-moon','fa-sun');
    }
    else
    {
        dark.classList.replace('fa-sun','fa-moon');
    }
})


let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');

button.addEventListener('click', function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=2408bd253e12c8aefd220b972c6ff166`)
    .then(response => response.json())
    .then(displayData)
    .catch(err => alert('Feil by navn'))
})

const displayData=(weather)=>{
    temp.innerText=`Temperatur: ${weather.main.temp}°C`
    desc.innerText=`Beskrivelse: ${weather.weather[0].description}`
    wind.innerHTML=`Vind: ${weather.wind.speed}m/s`

}
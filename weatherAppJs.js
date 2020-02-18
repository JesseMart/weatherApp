var submit = document.querySelector('#submitB')
submit.addEventListener('click', function(e){
    var cityname = document.querySelector('#city')
    console.log(cityname.value);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=b1017a1331dd26cf668f955fe5845768&`;
    console.log(url);
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((weatherObj)=>{
        console.log(weatherObj);
        let i = weatherObj.main.temp;
        let celsius = i - 273;
        let fahrenheit = celsius * 1.8 + 32;
        let displayR = document.querySelector('.displayResults');
        displayR.innerHTML = fahrenheit.toFixed(0);
        
    })
})
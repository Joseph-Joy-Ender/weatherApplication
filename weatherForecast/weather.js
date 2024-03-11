let cityName = document.getElementById("cityName")
let searchBtn = document.getElementById("searchBtn")
let result = document.getElementById("result")

function weatherResult(data) {
    result.innerHTML = `
            <div class="info">
                <img src="cloud.png" alt="" class="icon">
                <div>
                
</div>
</div>
    `

}
let getWeather = () =>{
    let weather = cityName.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&APPID=${key}`;

    if (weather.length <= 0){
        result.innerHTML = `<h3 class="msg">Please Enter A City Name</h3>`;
    }else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) =>{
                weatherResult(data);
                // console.log(data)
                // console.log(data.name)
                // console.log(data.main.feels_like)
                // console.log(data.main.humidity)
                // console.log(data.main.pressure)
                // console.log(data.weather[0].icon)
                // console.log(data.wind.speed)
                // console.log(data.weather[0].main)
                // console.log(data.weather[0].description)



            })
    }
}
searchBtn.addEventListener("click", getWeather)
window.addEventListener("load", getWeather)
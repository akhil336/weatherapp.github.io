let weather = {
    apiKey:"458933d2429d9c656fe4d4004982ae78",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city +"&units=metric&APPID="
        + this.apiKey).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name }= data;
        const {description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(data);
        console.log(name,description,temp,humidity,speed);
        
    document.getElementById("city").innerHTML=name;
    document.querySelector(".temp").innerHTML=temp;
    document.querySelector(".desc").innerHTML=description;
    document.querySelector(".humidity").innerHTML=humidity;
    document.querySelector(".wind").innerHTML=speed;
    }

}
let button=document.querySelector(".search-btn");
button.addEventListener('click',()=>
{   
    let city1=document.querySelector("input").value;
    //console.log(city1);
    console.log(weather.fetchWeather(city1));

})

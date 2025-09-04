let search = document.querySelector(".search-container")
let inputElement = document.getElementById("inputElement")
let city = document.querySelector(".city")
let windSpeed = document.querySelector(".wind-speed")
let humidity = document.querySelector(".humidity")
let temperature = document.querySelector(".temperature")
let feels = document.querySelector(".feels")
let dated = document.querySelector(".date")

function toggle() {
inputElement.addEventListener("keypress", async () => {
    // const name=display.value
    const name = inputElement.value
    const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&appid=cc540bd2c08b6929af37795a4d339c38`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    let ts = data.dt;
    let date = new Date(ts * 1000);
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };
    let formatted = date.toLocaleString("en-US", options);
    city.innerText = data.name
    windSpeed.innerText = data.wind.speed + " km/hr"
    humidity.innerText = data.main.humidity + "%"
    temperature.innerText = data.main.temp + "°C"
    feels.innerText = data.main.feels_like + "°C"
    dated.innerText = formatted;
    if(data.weather[0].main == "Clouds") {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
    } else if(data.weather[0].main == "Clear") {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
    }  else if(data.weather[0].main == "Rain") {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
    } else if(data.weather[0].main == "Snow") {
        document.body.style.backgroundImage = "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fsnowfall%2F&psig=AOvVaw0zQevLFVs77IQp3xUItTbS&ust=1757046316900000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPib8t6hvo8DFQAAAAAdAAAAABAE')";
    } else if(data.weather[0].main == "Thunderstorm") {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
    } else if(data.weather[0].main == "Drizzle") {
        document.body.style.backgroundImage = "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdrizzle&psig=AOvVaw0PPCYQ9_lPlDdPZM6x86-e&ust=1757046355564000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDCnfChvo8DFQAAAAAdAAAAABAE')";
    } else if(data.weather[0].main == "Mist") {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
    }   else {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
    }   

})
}
toggle()




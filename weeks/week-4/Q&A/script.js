const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "7309e4a5829fafe809df835ad95f18ea"

const city = document.getElementById("location")
const temperature = document.getElementById("temperature")
const cityQuery = "Tokyo, Japan"

const fetchWeather = () => {
  fetch(`${BASE_URL}?q=${cityQuery}&units=metric&APPID=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML = cityQuery
      temperature.innerHTML = `${data.main.temp} C°`
      calculateSunrise(data)
    })
}

fetchWeather()

const calculateSunrise = (data) => {
  const unixTimestamp = data.sys.sunrise //Sunrise from API in unix timestamp
  const sunriseTimestamp = unixTimestamp * 1000 //Converts to milliseconds
  const sunriseDate = new Date(sunriseTimestamp) //Converts milliseconds to a date object
  const userTime = sunriseDate.toLocaleTimeString([], { timeStyle: 'short' }) //Converts to user's local time string
  console.log("User's time:", usersTime)

  const timezone = data.timezone //Timezone
  const offset = new Date().getTimezoneOffset() * 60 //The timezone offset in seconds
  const sunriseInSeconds = unixTimestamp + timezone + offset //Sunrise timestamp + timezone + adding the offset
  const sunriseInMilliseconds = sunriseInSeconds * 1000 // Converts seconds to milliseconds
  const sunriseLocalDate = new Date(sunriseInMilliseconds) //Converts milliseconds to a date object
  const localTime = sunriseLocalDate.toLocaleTimeString([], { timeStyle: 'short' }) //Converts to local time string

  console.log("Local time", localTime)
}

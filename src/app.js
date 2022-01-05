function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "b76279664b73c37d7b7d0ba8dd209be6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

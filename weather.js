//variables
const URL = "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=75000&country=FR&days=4&lang=fr&key=62284d271a0a4563895653b60a34029a";
const btn = document.getElementById("btnGo");
const city = document.getElementById("cityName");
const weatherDesc = document.getElementById("weatherDesc");



//function
const showWeather = (response) => {

  weatherDesc.innerHTML = "";

  let city_name = response.city_name;

  for (let i = 0; i < response.data.length; i++) {

    let day = response.data[i].datetime;
    let weather = response.data[i].weather.description;
    let temperature = response.data[i].temp;

    weatherDesc.innerHTML += `
    <div class="row">
      <div class="col-md-8">
        <div class="card"> <span class="icon"><img class="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
          <div class="title">
            <p id="cityName">${city_name}</p>
          </div>
          <div class="temp">${temperature}<sup>&deg;</sup></div>
          <div class="row">
            <div class="col-4">
              <div class="header">General</div>
              <div class="value" id="weatherDesc">${weather}</div>
            </div>
            <div class="col-4">
              <div class="header">Jour</div>
              <div class="value">${day}</div>
            </div>
            <div class="col-4">
              <div class="header">Fire</div>
              <div class="value">No</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  };
};

const weatherApi = () => {
  fetch(URL, {
    method: "GET"
  })
  .then((response) => response.json())
  .then((response) => showWeather(response))
  .catch((error) => console.error('error: ', error));

};



//ActionCall
btn.addEventListener("click", () => {
  weatherApi();
});

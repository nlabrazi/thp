//Variables
const btnVelib = document.getElementById("getVelib");
const resultVelib = document.getElementById("resultBike");
const urlVelib = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=10&facet=name&facet=nom_arrondissement_communes&facet=numbikesavailable&facet=mechanical&facet=ebike";
//var interval = setInterval(function () { testVelib(); }, 10000);


//Function
const showVelib = (response) => {
  let name = ""
  let electric = 0
  let classic = 0


  for (let i = 0; i < response.length; i++) {
    name = response[i].fields.name;
    electric = response[i].fields.ebike;
    classic = response[i].fields.mechanical;
    resultVelib.innerHTML += `
    <h2>Station : ${name}</h2>
    <p>${classic} classical Velibs</p>
    <p>${electric} electric Velibs</p>
    `
  }
};

const testVelib = () => {
  fetch(urlVelib, {
    method: "GET",
  })
  .then((response) => response.json() )
  .then((response) => showVelib(response.records) )
  .catch((error) => console.error('error:', error));
};



//ActionCall
btnVelib.addEventListener("click", () => {
  testVelib();
});

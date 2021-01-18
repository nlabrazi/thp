let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
let tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function(node) {
    node.style.backgroundColor="";
    node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="white";

  tabPanels.forEach(function(node) {
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display="block";
//  tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0, '#f44336');



var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]

var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
var random_side = sides[Math.floor(Math.random()*sides.length)]
var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

var menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`

let tab2 = document.getElementById("tab2");
tab2.addEventListener("onclick", ())

//variable
const btnSearch = document.getElementById("btnSearch");
const results = document.getElementById("searchResultUl");
const formSearch = document.getElementById("searchForm");
const modalTest = document.getElementById("modalTest");



//function

const exit = () => {
  document.getElementById("modal").style.display = "none";
}

const readMore = (IdOfMovie) => {
  console.log("Id Of Movie :")
  console.log(IdOfMovie);
  const readUrl = `http://www.omdbapi.com/?i=${IdOfMovie}&apikey=63a43a65`;
  fetch(readUrl)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    modalTest.innerHTML = "";
    console.log(modalTest);
    modalTest.innerHTML =
    `
    <div id="modal" class="modal" tabindex="-1" style="display:block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${data.Title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal"></button>
          </div>
          <div class="modal-body">
            <h5>Sortie le : ${data.Released}</h5>
            <p>Description : ${data.Plot}</p>
            <img src="${data.Poster}" alt="">
          </div>
        </div>
      </div>
    </div>
    `
  const closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", () => {exit();});
  });
};


const searchMovie = (searchInput) => {
  const apiUrl = `http://www.omdbapi.com/?s=${searchInput}&apikey=63a43a65`;
  fetch(apiUrl)
  .then(response => response.json())
  .then((data) => {
    results.innerHTML = "";
    //console.log(data);
    if (data.Response == "False") {
      results.innerHTML += `<h4>AUCUN RESULTAT</h4>`
    } else {
      data.Search.forEach((movie) => {
        //console.log("Movie :")
        //console.log(movie.imdbID);
        results.innerHTML +=
        `<li>
        <img src="${movie.Poster}"/>
        <p>Titre : ${movie.Title}</p>
        <p>Sortie : ${movie.Year}</p>
        <button data-id="${movie.imdbID}" class="btn btn-primary btnReadMore">read more</button>
        </li>`;
      });
      const cta = document.querySelectorAll(".btnReadMore").forEach(item => {
        //console.log("Item :")
        //console.log(item);
        console.log(item.dataset.id);
        item.addEventListener("click", () => { readMore(item.dataset.id); });
      });
    };
  });
};



//ActionCall
formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchInput = document.getElementById("searchValue").value;
  searchMovie(searchInput);
});



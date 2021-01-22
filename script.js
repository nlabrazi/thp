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
  const readUrl = `http://www.omdbapi.com/?i=${IdOfMovie}&apikey=63a43a65`;
  fetch(readUrl)
  .then(response => response.json())
  .then((data) => {
    modalTest.innerHTML = "";
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
    if (data.Response == "False") {
      results.innerHTML += `<h4>AUCUN RESULTAT</h4>`
    } else {
      data.Search.forEach((movie) => {
        results.innerHTML +=
        `<li>
          <div class="card-product">
            <img src="${movie.Poster}">
              <div class="card-product-infos">
                <h2>${movie.Title}</h2>
                <p class="details" style="font-size:20px">Année de sortie : <strong>${movie.Year}</strong> au cinéma</p>
              </div>
              <div class="card-more">
                <button data-id="${movie.imdbID}" class="btn btn-primary btnReadMore">read more</button>
              </div>
          </div>
          <br>
        </li>`;
      });
      const cta = document.querySelectorAll(".btnReadMore").forEach(item => {
        item.addEventListener("click", () => { readMore(item.dataset.id); });
      });


      // begin Observer
      let observer = new IntersectionObserver(function (observable) {
        observable.forEach(function (observable) {
          console.log("Card Visible count");
          if (observable.intersectionRatio > 0.5) {                //des que la card est visible (ratio > 0.5)
            observable.target.classList.remove('not-visible');     //enlever la class not-visible et du coup change la class css
            observer.unobserve(observable.target);                 // not really working 😢😢😢😢😢
          }
        })
      }, {
        threshold: [0.5]
      })

      let cardsMovie = document.querySelectorAll('.card-product')
      cardsMovie.forEach(function (card) {
        card.classList.add('not-visible')
        observer.observe(card)
      })
      // end Observer

    };
  });
};



//ActionCall
formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchInput = document.getElementById("searchValue").value;
  searchMovie(searchInput);
});

// your code goes here// Mock movie data
const movies = [
  { title: "Movie 1", year: 2023, poster: "https://via.placeholder.com/200x300?text=Movie+1", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Movie 2", year: 2022, poster: "https://via.placeholder.com/200x300?text=Movie+2", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Movie 3", year: 2021, poster: "https://via.placeholder.com/200x300?text=Movie+3", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Movie 4", year: 2020, poster: "https://via.placeholder.com/200x300?text=Movie+4", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Movie 5", year: 2019, poster: "https://via.placeholder.com/200x300?text=Movie+5", trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

// Populate rows
const popularRow = document.getElementById("popular-row");
const trendingRow = document.getElementById("trending-row");

function loadMovies(row, list) {
  list.forEach(movie => {
    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;
    img.addEventListener("click", () => openModal(movie));
    row.appendChild(img);
  });
}

loadMovies(popularRow, movies);
loadMovies(trendingRow, movies.reverse());

// Modal logic
const modal = document.getElementById("movie-modal");
const modalTitle = document.getElementById("modal-title");
const modalTrailer = document.getElementById("modal-trailer");
const modalInfo = document.getElementById("modal-info");
const closeModal = document.getElementById("close-modal");

function openModal(movie) {
  modal.style.display = "flex";
  modalTitle.textContent = movie.title;
  modalTrailer.src = movie.trailer;
  modalInfo.textContent = `Year: ${movie.year}`;
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalTrailer.src = ""; // stop video
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalTrailer.src = "";
  }
});


const API_KEY = "c5cbdacf5d75f7544d630cee2920bdf1";
const API_BASE = "https://api.themoviedb.org/3";

const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const darkModeToggle = document.getElementById("darkModeToggle");

// Fetch trending movies //
async function fetchTrendingMovies() {
  const res = await fetch(`${API_BASE}/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  displayMovies(data.results);
}

// Display movies in the grid format //
function displayMovies(movies) {
  moviesGrid.innerHTML = "";
  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
    moviesGrid.appendChild(movieDiv);
  });
}

// Search movies or TV shows  on my app ofcourse //
searchButton.addEventListener("click", async () => {
  const query = searchInput.value;
  const res = await fetch(
    `${API_BASE}/search/multi?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  displayMovies(data.results);
});

// Toggle dark mode and my light move here //
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Initialize and fetch data  to show on my page Yes //
fetchTrendingMovies();

// JavaScript for Burger Menu function must be here //
const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

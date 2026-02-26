const movies = [
    { title: "Interstellar", year: 2014, url: "https://www.imdb.com/title/tt0816692/", img: "Interstellar.jpg" },
    { title: "The Dark Knight", year: 2008, url: "https://www.imdb.com/title/tt0468569/", img: "Batman.jpg" },
    { title: "Inception", year: 2010, url: "https://www.imdb.com/title/tt1375666/", img: "Inception.jpg" },
    { title: "The Joker", year: 2019, url: "https://www.imdb.com/title/tt7286456/", img: "joker.jpg" },
    { title: "Spider-Man", year: 2021, url: "https://www.imdb.com/title/tt10872600/", img: "Spiderman.jpg" }
];

const movieGrid = document.getElementById('movieGrid');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <div class="movie-info">
            <h4>${movie.title}</h4>
            <p>${movie.year}</p>
        </div>
    `;

    card.onclick = () => {
        window.open(movie.url, '_blank');
    };

    movieGrid.appendChild(card);
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#0f0f0f';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
        nav.style.boxShadow = 'none';
    }
});
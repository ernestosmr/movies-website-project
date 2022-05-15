
function createMovies(movies, container){
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        movieContainer.addEventListener('click', () => {
            location.hash = '#movie=' + movie.id;
        })

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    })
}
function createCategories(categories, container){
    container.innerHTML = ''

    categories.forEach(category => {

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container')
        const categoryTitle = document.createElement('h3')
        categoryTitle.classList.add('category-title')
        categoryTitle.setAttribute('id', 'id' + category.id)
        categoryTitle.addEventListener('click', () => {
            location.hash=`#category=${category.id}-${category.name}`
        })
        categoryTitle.innerText = category.name;

        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
}

// Lamados a la API


async function getTredingMoviesPreview(){
    const  { data } = await API('trending/movie/day');
    const movies = data.results;
    createMovies(movies, trendingMoviesPreviewList );
};

async function getCategoriesPreview(){
    const  { data } = await API('/genre/movie/list');
    const categories = data.genres;
    // categoriesPreviewList.innerHTML = ''
    createCategories(categories, categoriesPreviewList)
};

async function getMoviesByCategory(id){
    const  { data } = await API('discover/movie',{
        params: {
            with_genres: id,
        }
    });
    const movies = data.results;
    createMovies(movies, genericSection)
};
async function getMoviesBySearch(query){
    const { data } = await API('search/movie',{
        params: {
            query,
        }
    });
    const movies = data.results;
    createMovies(movies, genericSection)
};

async function getTredingMovies(){
    const  { data } = await API('trending/movie/day');
    const movies = data.results;
    createMovies(movies, genericSection );
};
async function getMoviebyId(id){
    const  { data: movie } = await API('movie/' +  id);

    const movieImg = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
    headerSection.style.background = `url(${movieImg})`
    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview
    movieDetailScore.textContent = movie.vote_average

    createCategories(movie.genres, movieDetailCategoriesList)

    getSimilarMoviesById(id)
};

async function getSimilarMoviesById(id){
    const  { data } = await API(`movie/${id}/similar`);
    const relatedMovies = data.results
    createMovies(relatedMovies, relatedMoviesContainer)
}
async function getTredingMoviesPreview(){
    const  { data } = await API('trending/movie/day');
    const movies = data.results;
    trendingMoviesPreviewList.innerHTML = ''

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
};
async function getCategoriesPreview(){
    const  { data } = await API('/genre/movie/list');
    const categories = data.genres;
    categoriesPreviewList.innerHTML = ''

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
        categoriesPreviewList.appendChild(categoryContainer);
    });
};

async function getMoviesByCategory(id){
    const  { data } = await API('discover/movie',{
        params: {
            with_genres: id,
        }
    });
    const movies = data.results;
    genericSection.innerHTML = ''

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        genericSection.appendChild(movieContainer);
    });
};
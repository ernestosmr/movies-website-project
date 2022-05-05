async function getTredingMoviesPreview(){
    const  { data } = await API('trending/movie/day');
    const movies = data.results;
    const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
};
async function getCategoriesPreview(){
    const  { data } = await API('/genre/movie/list');
    const categories = data.genres;
    const previewCategoryContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')

    categories.forEach(category => {

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container')
        const categoryTitle = document.createElement('h3')
        categoryTitle.classList.add('category-title')
        categoryTitle.setAttribute('id', 'id' + category.id)
        categoryTitle.innerText = category.name;

        categoryContainer.appendChild(categoryTitle);
        previewCategoryContainer.appendChild(categoryContainer);
    });
};

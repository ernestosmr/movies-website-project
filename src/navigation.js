searchFormBtn.addEventListener("click", () => {
  location.hash = '#search='
})
trendingBtn.addEventListener("click", () => {
  location.hash = '#trends'
})
arrowBtn.addEventListener("click", () => {
  location.hash = '#home'
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }
}


function homePage() {
    console.log('Home!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericList.classList.add('inactive');
    movieDetailSection.classList.add('inactive'); 

    getTredingMoviesPreview();
    getCategoriesPreview()
    window.scrollTo(0,0)
}

function categoriesPage() {
    console.log('categories!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericList.classList.remove('inactive');
    movieDetailSection.classList.add('inactive'); 

  const [_, categoryData] = location.hash.split('=')
  const [categoryId, categoryName] = categoryData.split('-')
  headerCategoryTitle.innerText = categoryName
    getMoviesByCategory(categoryId);
    window.scrollTo(0,0)
}

function movieDetailsPage() {
    console.log('Movie!!');

    headerSection.classList.add('header-container--long')
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericList.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    window.scrollTo(0,0)
}

function searchPage() {
    console.log('Search!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericList.classList.remove('inactive');
    movieDetailSection.classList.add('inactive'); 
    window.scrollTo(0,0)
}

function trendsPage() {
    console.log('TRENDS!!');


    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericList.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    window.scrollTo(0,0)
}

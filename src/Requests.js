const reqKey = process.env.REACT_APP_REQUEST_MOVIE_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${reqKey}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${reqKey}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${reqKey}`,
  requestFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${reqKey}&language=en-US&sort_by=popularity.desc&page=2&with_genres=fantasy`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${reqKey}&language=en-US&page=1`,
};

export default requests;

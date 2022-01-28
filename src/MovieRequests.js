import axiosBaseUrl from "./axios";
const API_KEY = process.env.REACT_APP_API_KEY

const movieReq = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchDiscover: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
    fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchDocs: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
}

export default movieReq
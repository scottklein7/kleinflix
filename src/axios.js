import axios from "axios";

const axiosBaseUrl = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default axiosBaseUrl
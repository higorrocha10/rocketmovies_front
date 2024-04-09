// Axios es una biblioteca para trabajar con solicitudes HTTP, como post, get, ..
import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketmovies-api-6dq3.onrender.com",
})

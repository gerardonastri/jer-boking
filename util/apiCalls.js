import axios from "axios"

const  BASE_URL = "https://jer-boking.vercel.app/api/";

export const axiosReq = axios.create({
    baseURL:  BASE_URL
})
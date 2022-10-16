import axios, { AxiosInstance } from "axios"


const clienteHttp: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/" || "https://my-own-tasks.vercel.app/"
})

export default clienteHttp
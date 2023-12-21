import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:"http://localhost:8082"
});

export default AxiosInstance;
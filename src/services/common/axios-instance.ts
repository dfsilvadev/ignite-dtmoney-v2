import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  params: {
    _sort: "createdAt",
    _order: "desc"
  }
});

export default axiosInstance;

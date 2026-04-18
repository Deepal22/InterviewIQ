import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://interview-iq-henna-sigma.vercel.app/api",
  withCredentials: true,
});

export default axiosInstance;
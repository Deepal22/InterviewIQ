import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://interview-iq-hney.vercel.app",
  withCredentials: true,
});

export default axiosInstance;
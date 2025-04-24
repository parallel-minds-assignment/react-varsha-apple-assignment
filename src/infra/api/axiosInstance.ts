/**
 * This file contains the axios instance configuration for making API requests.
 */
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

/**
 * @returns
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

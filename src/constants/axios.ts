import axios from "axios";
import { apiUrl } from "constants/apiUrl";

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});

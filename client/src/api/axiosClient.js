
import axios from 'axios';

// Development URL (Server port 4040)
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4040/";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
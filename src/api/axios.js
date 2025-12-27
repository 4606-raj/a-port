import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL + import.meta.env.VITE_API_VERSION;
axios.defaults.withCredentials = false;
axios.defaults.headers.Accept = "application/json";

export default axios;

import axios from "axios";

const token = "e0e6e2967dde85c9b0c604989ae1af47";

axios.defaults.baseURL = "https://api.vimeo.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default {
  subcategories: {
    getAll: () => axios.get(`/categories/documentary/`).then(res => res.data)
  }
};

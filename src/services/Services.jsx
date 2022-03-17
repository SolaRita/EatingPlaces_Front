import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

export const Services=()=> {
  const placesUrl = "/places";
  const categoryUrl = "/category";
  const getPlaces = () => {
    return  axios.get(placesUrl);
  };
  const getCategories = () => {
    return  axios.get(categoryUrl);
  };
  return {getPlaces, placesUrl, getCategories, categoryUrl};
}





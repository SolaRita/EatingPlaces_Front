import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

export const Services=()=> {
  const placesUrl = "/places";
  const categoryUrl = "/categories";
  

  const getPlaces = async () => {
    const res = await axios.get(placesUrl)
    return res ;
  };

  const getCategories = async () => {
    const res = await axios.get(categoryUrl)
    return  res;
  };


  const getPlacesbyCategory=async (category)=> {
    const res = await axios.get(`/categories/${category}/places`)
    return res
  };

 
  return {getPlaces, placesUrl, getCategories, categoryUrl, getPlacesbyCategory};
}





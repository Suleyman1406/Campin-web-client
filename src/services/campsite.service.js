import axios from "axios";

const getCampsites = () => {
  return axios
    .get(`https://campinbackend.azurewebsites.net/api/v1/Campsite`)
    .then((response) => {
      return response.data;
    });
};
const getCampsitesByLocations = (locations) => {
  return axios
    .get(
      `https://campinbackend.azurewebsites.net/api/v1/Campsite/GetCampsiteByLocations?locations=${locations}`
    )
    .then((response) => {
      return response.data;
    });
};

const getCampsiteById = (id) => {
  return axios
    .get(`https://campinbackend.azurewebsites.net/api/v1/Campsite/${id}`)
    .then((response) => {
      return response.data;
    });
};

const getCampsiteImagesUrl = (id) => {
  return axios
    .get(`https://campinbackend.azurewebsites.net/api/v1/Link/${id}?id=${id}`)
    .then((response) => {
      return response.data;
    });
};

const campsiteService = {
  getCampsites,
  getCampsitesByLocations,
  getCampsiteById,
  getCampsiteImagesUrl,
};

export default campsiteService;

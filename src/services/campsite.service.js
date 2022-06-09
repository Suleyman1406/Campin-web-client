import axios from "axios";

const getCampsites = () => {
  return axios
    .get(`https://campinbackend.azurewebsites.net/api/v1/Campsite`)
    .then((response) => {
      return response.data;
    });
};

const campsiteService = { getCampsites };

export default campsiteService;

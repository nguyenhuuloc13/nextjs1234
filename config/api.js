import axios from "axios";
const API_URL = process.env.API_URL;

const defaultOption = {
  withCredentials: true,
};

function getApi(path, option = {}, apiURL) {
  return axios.get(`${apiURL || API_URL}/${path.replace(/^\//, "")}`, {
    ...defaultOption,
    ...option,
  });
}

function posstApi(path, option = {}, apiURL) {
  return axios.post(
    `${apiURL || API_URL}/${path.replace(/^\//, "")}`,
    option?.data,
    {
      ...defaultOption,
      ...option,
    }
  );
}

function puttApi(path, option = {}, apiURL) {
  return axios.put(
    `${apiURL || API_URL}/${path.replace(/^\//, "")}`,
    option?.data,
    {
      ...defaultOption,
      ...option,
    }
  );
}

function deleteApi(path, option = {}, apiURL) {
  return axios.delete(`${apiURL || API_URL}/${path.replace(/^\//, "")}`, {
    ...defaultOption,
    ...option,
  });
}

const api = {
  get: getApi,
  post: posstApi,
  put: puttApi,
  delete: deleteApi,
};

export default api;

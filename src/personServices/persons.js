import axios from "axios";

const baseUrl = "http://localhost:3002/persons";

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((res) => res.data);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then((res) => res.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, deletePerson };

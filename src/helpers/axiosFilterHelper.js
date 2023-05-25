import axios from "axios";

const apiUrl = "https://randomuser.me/api/?gender";

export const fetchGender = () => {
  const response = axios.get(apiUrl);
  return response;
};

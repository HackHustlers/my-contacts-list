import axios from "axios";

const apiUrl = "https://randomuser.me/api/?results=20";

export const fetchContacts = () => {
  const response = axios.get(apiUrl);
  return response;
};

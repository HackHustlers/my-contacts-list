import { useState, useEffect } from "react";
import { fetchContacts } from "../helpers/axiosHelper";

export function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchedContacts();
  }, []);

  const fetchedContacts = async () => {
    const { data } = await fetchContacts();
    setContacts(data.results);
  };

}
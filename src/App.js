import { useEffect, useState } from "react";
import "./App.css";
import { CustomCard } from "./components/contacts/CustomCard";
import { fetchContacts } from "./helpers/axiosHelper";
import { SearchBar } from "./components/contacts/SearchBar";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchedContacts();
  }, []);

  const fetchedContacts = async () => {
    const { data } = await fetchContacts();
    setContacts(data.results);
  };

  const [setResults] = useState([]);




  return (
    <div className="wrapper">
      <div className="container">
        <SearchBar setResults={setResults} />
        <CustomCard contacts={contacts} />
      </div>
    </div>
  );
}

export default App;

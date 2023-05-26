import { useEffect, useState } from "react";
import "./App.css";
import { CustomCard } from "./components/contacts/CustomCard";
import { fetchContacts } from "./helpers/axiosHelper";
import { SearchBar } from "./components/contacts/SearchBar";

function App() {
  const [allContacts, setAllContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    fetchedContacts();
  }, []);

  const fetchedContacts = async () => {
    const { data } = await fetchContacts();
    setAllContacts(data.results);
    setFilteredContacts(data.results);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <SearchBar allContacts={allContacts} setFilteredContacts={setFilteredContacts} />
        <CustomCard contacts={filteredContacts} />
      </div>
    </div>
  );
}

export default App;

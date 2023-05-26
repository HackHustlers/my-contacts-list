import { useEffect, useState } from "react";
import "./App.css";
import { CustomCard } from "./components/contacts/CustomCard";
import { fetchContacts } from "./helpers/axiosHelper";
import { SearchBar } from "./components/search/SearchBar";
import { Title } from "./components/title/Title";

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
      <Title />
      <div className="container">
        <SearchBar
          allContacts={allContacts}
          setFilteredContacts={setFilteredContacts}
        />
        <hr />
        <CustomCard contacts={filteredContacts} />
      </div>
    </div>
  );
}

export default App;

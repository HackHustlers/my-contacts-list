import { useEffect, useState } from "react";
import "./App.css";
import { FilterDropdown } from "./components/FilterDropdown";
import { CustomCard } from "./components/CustomCard";
import { fetchContacts } from "./helpers/axiosHelper";


function App() {
  // Set initial state of contacts and filteredContacts as empty arrays. These initial states are passed to the FilterDropdown component as props.
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Fetch initial contacts on component mount
  useEffect(() => {
    fetchedContacts();
  }, []);

  // Fetch contacts from the API
  const fetchedContacts = async () => {
    const { data } = await fetchContacts();
    // Update the contacts state with the fetched results
    setContacts(data.results);
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* Render the FilterDropdown component */}
        <FilterDropdown contacts={contacts} setFilteredContacts={setFilteredContacts} /> 
        {/* Render the CustomCard component with the contacts state if the filteredContacts array is empty. Otherwise, render the filteredContacts array */}
        <CustomCard contacts={filteredContacts.length > 0 ? filteredContacts : contacts}  />
      </div>
    </div>
  );
}

export default App;

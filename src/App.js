import { useEffect, useState } from "react";
import "./App.css";
import { FilterMenu } from "./components/Filter";
import { CustomCard } from "./components/CustomCard";
import { fetchContacts } from "./helpers/axiosHelper";


function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchedContacts();
  }, []);

  const fetchedContacts = async () => {
    const { data } = await fetchContacts();
    setContacts(data.results);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <FilterMenu />
        <CustomCard contacts={contacts} />
      </div>
    </div>
  );
}

export default App;

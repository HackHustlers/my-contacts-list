import { fetchContacts } from "../helpers/axiosHelper";
import { useState } from "react"
// import { fetchContacts } from "../helpers/axiosHelper";
import { CustomCard } from "./CustomCard";

export const FilterMenu = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleGenderChange = (event) => {
    const selection = event.target.value;
    setSelectedGender(selection);

    if (selection === "male" || selection === "female") {
      fetchContacts()
      .then(response => {
        const contacts = response.data.results;
        const filteredContacts = contacts.filter(contact => contact.gender === selection);
        setFilteredContacts(filteredContacts);
      });
   }
  }

return (
    <div>
        <select value={selectedGender} onChange={handleGenderChange}>
           <option>Select a gender</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
        </select>
        <div>
        <CustomCard contacts={filteredContacts}/>
        </div>
    </div>
)

}

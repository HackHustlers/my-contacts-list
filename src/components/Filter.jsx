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

    if (selection === "Male") {
      fetchContacts()
      .then(response => {
        const maleContacts = response.data.results;
        setFilteredContacts(maleContacts);
      })
    } else if (selection === "Female") {
      fetchContacts()
      .then(response => {
        const femaleContacts = response.data.results;
        setFilteredContacts(femaleContacts);
    });
   }
  }

return (
    <div>
        <select value={selectedGender} onChange={handleGenderChange}>
           <option>Select a gender</option>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
        </select>
        <div>
        <CustomCard contacts={filteredContacts}/>
        </div>
    </div>
)

}

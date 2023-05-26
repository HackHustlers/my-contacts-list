import React from "react";
import "./GenderFilter.css";

export const GenderFilter = ({ allContacts, setFilteredContacts }) => {
  const filterByGender = (gender) => {
    if (gender === "") {
      setFilteredContacts(allContacts);
    } else {
      const results = allContacts.filter(
        (contact) => contact.gender === gender
      );
      setFilteredContacts(results);
    }
  };
  return (
    <select
      className="gender-filter"
      onChange={(e) => filterByGender(e.target.value)}
    >
      <option value="">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};

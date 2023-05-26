import React, { useState } from "react";
import "./SearchBar.css";
import { GenderFilter } from "../filter/GenderFilter";

export const SearchBar = ({ allContacts, setFilteredContacts }) => {
  const [input, setInput] = useState("");
  const filterContacts = (value) => {
    const results = allContacts.filter((result) => {
      const lowerCaseValue = value.toLowerCase();
      const isFirstNameMatch = result.name.first
        .toLowerCase()
        .includes(lowerCaseValue);
      const isLastNameMatch = result.name.last
        .toLowerCase()
        .includes(lowerCaseValue);
      return isFirstNameMatch || isLastNameMatch;
    });
    setFilteredContacts(results);
  };

  const handleChange = (value) => {
    setInput(value);
    filterContacts(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Search here"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <GenderFilter
        allContacts={allContacts}
        setFilteredContacts={setFilteredContacts}
      />
    </div>
  );
};

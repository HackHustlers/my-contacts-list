import React, { useState } from 'react';

export const FilterDropdown = ({ contacts, setFilteredContacts }) => {
  // Set initial state of gender selection as empty string
  const [selectedOption, setSelectedOption] = useState('');

  // Update selectedOption state with the selected value
  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);

    // Filter contacts based on gender and set this as the updated state
    if (option === 'male' || option === 'female') {
      const filteredContacts = contacts.filter(contact => contact.gender === option);
      setFilteredContacts(filteredContacts);
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option>Select an option</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

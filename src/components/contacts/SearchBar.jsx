import React, {useState} from 'react';
import "./SearchBar.css";

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("")
  const fetchData = (value) => {
    fetch("https://randomuser.me/api/?results=20")
    .then((response) => response.json())
    .then((data) => {
      const results = data.results.filter((result) => {
        const lowerCaseValue = value.toLowerCase();
        const isFirstNameMatch = result.name.first.toLowerCase().includes(lowerCaseValue)
        const isLastNameMatch = result.name.last.toLowerCase().includes(lowerCaseValue)
        return isFirstNameMatch || isLastNameMatch;
      });
      setResults(results)
    });
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className="input-wrapper">
    <input placeholder="Search here" value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}
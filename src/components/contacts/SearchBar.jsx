import React, {useState} from 'react';
import "./SearchBar.css";

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("")
  const fetchData = (value) => {
    fetch("https://randomuser.me/api/?results=20")
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((user) => {
        return value &&
        user &&
        user.name &&
        user.name.toLowerCase().includes(value)
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
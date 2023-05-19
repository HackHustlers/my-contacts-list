import { useEffect, useState } from "react";

export default function Filter() {

    const [contact, setContact] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?gender=female")
        .then(response => response.json())
        .then(data => {
            setContact(data.gender)
        })
    },[]);

    useEffect(() => {
        console.log("Gender is " + contact)
    })


    return (
        <div>
            <h1>{contact}</h1>
        </div>
    );
}
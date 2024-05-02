import React, { useState } from "react"

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);

    const updateName = () => {
        setName("AlbisAbelDas");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const decrementAge = () => {
        setAge(age - 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployee(!isEmployee);
    }
    return (
        <div className="DivClass">
            <p className="p1">Name: {name}</p>
            <button className="counter-button" onClick={updateName}>SetName</button>
            <p className="p2">Age: {age}</p>
            <button className="counter-button" onClick={incrementAge}>Increment Age</button>
            <br />
            <button className="counter-button" onClick={decrementAge}>DecrementAge</button>
            <p className="p2">Is Employeed: { isEmployee ? "Yes" : "No"}</p>
            <button className="counter-button" onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent
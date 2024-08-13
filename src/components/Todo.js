import React, { useState } from 'react';
import './Todo.css'

function Todo() {
    const [value, setValue] = useState("");
    const [item, setItem] = useState([]);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const addItem = () => {
        setItem([...item,value]); {/*Spread operator*/}
        setValue('');
    };
    const removeItem = (index) => {
        const updatedItems = [...item];
        updatedItems.splice(index, 1);
        setItem(updatedItems);
    };
    return (
        <div>
            <input type="text" value={value} placeholder="Enter task to add" onChange={handleChange}></input>
            <button onClick={addItem}>Add</button>
            <ul>
            {item.map((val, index) => (  
                    <li key={index}>
                        {val} <button onClick={() => removeItem(index)}>Remove</button></li>
                ))}
            </ul>
        </div>
  )
}

export default Todo;
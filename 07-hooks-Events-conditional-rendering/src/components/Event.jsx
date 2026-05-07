import React, { useState } from 'react'

const Event = () => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value);
        console.log(name);
    };

    const handleClick = () => {
        alert("Hello " + name)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        alert("Submitted with name: " + name);
    };

    return (
        <div className='m-2 flex flex-col items-center'>
            <input type="text" required onChange={handleChange}
                className='border border-black-500 p-1 rounded-lg'
            />
            <h2>Hello: {name}</h2>
            <button onClick={handleSubmit}
                className='bg-gray-600 p-2 rounded-lg text-white cursor-pointer'
            >Submit</button>
        </div>
    )
}

export default Event;

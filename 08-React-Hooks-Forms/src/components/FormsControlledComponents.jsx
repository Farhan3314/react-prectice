import React, { useState } from 'react'
const ControlledComponents = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phno, setPhno] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}, Password: ${password}, Ph. No.: ${phno}`);
    };

    const handleClear = () => {
        setName('');
        setPassword('');
        setPhno('');
    }

    return (
        <div className='flex flex-col items-center justify-center bg-gray-300 gap-4 h-screen'>
            <h1>Controlled Component</h1>
            <input className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter Your Name' />

            <input className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Your Password' />

            <input className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="tel" value={phno} onChange={(event) => setPhno(event.target.value)} placeholder='Enter Your Ph. No.' />
            <button className='cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>Submit</button>
            <button className='cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' onClick={handleClear}>Clear Data</button>
            <h2>{name}</h2>
            <h2>{password}</h2>
            <h2>{phno}</h2>
        </div>
    )
}

export default ControlledComponents;
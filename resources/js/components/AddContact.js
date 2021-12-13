import axios from 'axios';
import React, { useState } from 'react';

const AddContact = () => {
    const [userInfo, setUserInfo] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userInfo }
        newUserData[field] = value;
        setUserInfo(newUserData);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const res = axios.post("/contact", userInfo)
            .then(result => console.log(result))
    }

    return (
        <div className='w-50 mx-auto mt-2'>
            <h1>Add New Contact</h1>
            <hr />
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <label htmlFor="" className='mb-2'>Name</label>
                <input className='form-control shadow-none mb-2' onBlur={handleOnBlur} type="text" name="name" id="" />
                <label htmlFor="" className='mb-2'>Mobile Number</label>
                <input className='form-control shadow-none' type="number" onBlur={handleOnBlur} name="number" id="" />
                <input type="submit" className='btn btn-primary shadow-none mt-3' value="Submit" />
            </form>
        </div>
    );
};

export default AddContact;
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AddContact = () => {
    const [userInfo, setUserInfo] = useState({})
    let navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userInfo }
        newUserData[field] = value;
        setUserInfo(newUserData);
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("https://react-laravel-crud.herokuapp.com/contact", userInfo)
            .then(result => {
                if (result.status === 200) {
                    swal({
                        title: "Contact Added Successfully!",
                        icon: "success",
                        button: "OK!",
                    });
                    navigate("/");
                }
            })
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
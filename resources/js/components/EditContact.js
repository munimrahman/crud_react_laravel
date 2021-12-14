import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState({ name: '', mobile: '' })
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`https://react-laravel-crud.herokuapp.com/contact/${id}/edit`)
            .then(res => res.json())
            .then(data => setUserInfo(data.contacts))
    }, [])

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, mobile: userInfo.mobile }
        setUserInfo(updatedUser)
    }
    const handleMobileChange = e => {
        const updatedMobile = e.target.value;
        const updatedUser = { name: userInfo.name, mobile: updatedMobile }
        setUserInfo(updatedUser)
    }

    const handleUpdate = e => {
        e.preventDefault();
        const res = axios.patch(`https://react-laravel-crud.herokuapp.com/contact/${id}`, userInfo)
            .then(result => {
                if (result.status === 200) {
                    swal({
                        title: "Contact Updated Successfully!",
                        icon: "success",
                        button: "OK!",
                    });
                    navigate("/");
                }
            })
    }
    return (
        <div className='w-50 mx-auto mt-2'>
            <h1>Edit Contact</h1>
            <hr />
            <form className='w-50 mx-auto' onSubmit={handleUpdate}>
                <label htmlFor="" className='mb-2'>Name</label>
                <input
                    className='form-control shadow-none mb-2'
                    type="text"
                    name="name"
                    id=""
                    value={userInfo.name}
                    onChange={handleNameChange}
                />
                <label htmlFor="" className='mb-2'>Mobile Number</label>
                <input
                    className='form-control shadow-none'
                    type="number"
                    name="number"
                    id=""
                    value={userInfo.mobile}
                    onChange={handleMobileChange}
                />
                <input type="submit" className='btn btn-primary shadow-none mt-3' value="Update" />
            </form>
        </div>
    );
};

export default EditContact;
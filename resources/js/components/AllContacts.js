import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const AllContacts = () => {
    const [users, setUsers] = useState()
    useEffect(async () => {
        const res = await axios.get("https://react-laravel-crud.herokuapp.com/contact")
            .then(res => setUsers(res.data.contacts))
    }, [users])

    // const handleDelete = id => {
    //     const res = axios.delete(`/contact/${id}`)
    //         .then(result => {

    //         })
    // }

    const handleDelete = id => {
        swal({
            title: "Are You Sure to Delete?",
            text: "Once deleted, you will not be able to recover this contact!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const res = axios.delete(`https://react-laravel-crud.herokuapp.com/contact/${id}`)
                        .then(result => {
                            if (result.status === 200) {
                                swal("Contact has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })
                } else {
                    swal("Contact Info is Safe!");
                }
            });
    }

    return (
        <div className='w-50 mx-auto mt-2'>
            <h1>All Contacts</h1>
            <hr />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='text-center' scope="col">#</th>
                        <th className='text-center' scope="col">Name</th>
                        <th className='text-center' scope="col">Number</th>
                        <th className='text-center' scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) => <tr key={user.id}>
                            <th className='text-center' scope="row">{i + 1}</th>
                            <td className='text-center'>{user.name}</td>
                            <td className='text-center'>{user.mobile}</td>
                            <td className='text-center'>
                                <Link to={`/edit-contact/${user.id}`}>
                                    <button className='btn btn-success py-0 shadow-none me-2'>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(user.id)} className='btn btn-danger py-0 shadow-none'>Delete</button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default AllContacts;
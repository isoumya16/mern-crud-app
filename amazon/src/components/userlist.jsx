import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/userlist.css';

const API_BASE_URL = 'https://your-backend-name.onrender.com';

const Userlist = () => {
    const [userdata, setuserdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getuserslist();
    }, []);

    const getuserslist = () => {
        axios.get(`${API_BASE_URL}/users/userlist`).then((response) => {
            setuserdata(response.data.message);
        })
    };

    const handleDelete = (id) => {
        axios.delete(`${API_BASE_URL}/users/deleteuser/` + id).then((response)=>{
            getuserslist();
        })
    };

    const handleEdit = (id) => {
        navigate('/edit/'+id);
    };

    return (
        <table border={1} width="100%">
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Action</th>
            </tr>
            {userdata && userdata.map((users) => (
                <tr>
                    <td>{users.users_id}</td>
                    <td>{users.firstname}</td>
                    <td>{users.lastname}</td>
                    <td>{users.email}</td>
                    <td>{users.mobileno}</td>
                    <td>
                        <input type="button" value="Delete" onClick={()=> handleDelete(users.users_id)}/>
                        <input type="button" value="Edit" onClick={()=> handleEdit(users.users_id)}/>
                    </td>
                </tr>
            )
            )}
        </table>
    )
}

export default Userlist;
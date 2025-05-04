import React, { useEffect, useState } from "react";
import "../css/profile.css";
import axios from "axios";

const API_BASE_URL = 'https://your-backend-name.onrender.com';

const Profile = () => {
  const [profiledata, setprofiledata] = useState('');
  const userid = localStorage.getItem('user_id');

  const getsingleuserlist = () => {
    axios.get(`${API_BASE_URL}/users/singleuserlist/` + userid).then((response) => {
        // console.log(response);

        setprofiledata(response.data.message[0]);
      })
  };

  useEffect(() => {
    getsingleuserlist();
  }, [userid]);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <img
          src={profiledata.profileImage || "ProfilePic.jpeg"}
          alt="Profile Picture"
        />
        <p>
          <strong>First Name:</strong> {profiledata.firstname || "N/A"}
        </p>
        <p>
          <strong>Last Name:</strong> {profiledata.lastname || "N/A"}
        </p>
        <p>
          <strong>Mobile Number:</strong> {profiledata.mobileno || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {profiledata.email || "N/A"}
        </p>
        <p>
          <strong>Password:</strong> {profiledata.password || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import '../css/header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    const firstname = localStorage.getItem('firstname');
    const email = localStorage.getItem('email');

    console.log(email);
    
    const handlelogout = () => {
        localStorage.clear();

        navigate('/login');
    }
  return (
    <>
        <div id="navbar-parent">
        <div id="logo">webphplearn.com</div>
        <ul className="nav-links">
            <input type="checkbox" id="checkbox-toggle"/>
            <label for="checkbox-toggle" className="hamburger">&#9776;</label>
            <div className="menu">
                <li><a onClick={()=>{navigate('/')}}>Home</a></li>
                <li className="services">
                    <a href="services.html">Services</a> <i className="ri-arrow-up-s-fill"></i><i className="ri-arrow-down-s-fill"></i>
                    <ul className="dropdown">
                    <li><a href="react.html">React Js</a></li>
                    <li><a href="node.html">NodeJs</a></li>
                    </ul>
                </li>
                {email === null && <>
                    <li><a onClick={()=>{navigate('/registration')}}>Registration</a></li>
                    <li><a onClick={()=>{navigate('/login')}}>Login</a></li>
                    <li><a onClick={()=>{navigate('/redux')}}>React Redux</a></li>
                    <li><a onClick={()=>{navigate('/contextapi')}}>Context API</a></li>
                </>}

                {email !== null && <>
                    <li><a onClick={()=>{navigate('/userlist')}}>User List</a></li>
                    <li><a onClick={()=>{handlelogout()}}>{firstname} (Log Out)</a></li>
                    <li><a onClick={()=>{navigate('/profile')}}>Profile</a></li>
                </>}
               
                <li><a href="react.html" >About us</a></li>
                <li><a onClick={()=>{navigate('/contact')}} >Contact</a></li>
            </div>
        </ul>
        </div>
        </>
  )
}

export default Header;
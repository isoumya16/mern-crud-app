import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/registration.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const API_BASE_URL = 'https://mern-crud-app-backend-riwj.onrender.com';

const Registration = () => {
  const location = useLocation();
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [mobileno, setmobileno] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [formname, setformname] = useState('');
  const [buttonname, setbuttonname] = useState('');
  const [formerror, setformerror] = useState('');
  const params = useParams();
  const navigate = useNavigate();
  const nameexpression = /^[a-zA-Z]{2,15}$/;
  const mobilenoexpression = /^[0-9]{10}$/;
  const emailexpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordexpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  useEffect(() => {
    if (location.pathname.split('/')[1] === "registration") {
      setformname('Registration Form');
      setbuttonname('Registration');
    }

    if (location.pathname.split('/')[1] === "edit") {
      setformname('Update Form');
      setbuttonname('Update');

      axios.get(`${API_BASE_URL}/users/singleuserlist/` + params.id).then((response) => {
        setfirstname(response.data.message[0].firstname);
        setlastname(response.data.message[0].lastname);
        setmobileno(response.data.message[0].mobileno);
        setemail(response.data.message[0].email);
        setpassword(response.data.message[0].password);
      })
    }

    if (location.pathname.split('/')[1] === "login") {
      setformname('Login Form');
      setbuttonname('Login');
      setfirstname('default');
      setlastname('default');
      setmobileno('1111111111');
    }

  }, [location.pathname, params.id]);

  const handleFirstname = (event) => {
    setfirstname(event.target.value)
    // console.log(firstname);
  }

  const handleLastname = (event) => {
    setlastname(event.target.value)
    // console.log(lastname);
  }

  const handleMobileNo = (event) => {
    setmobileno(event.target.value)
    // console.log(moblieno);
  }

  const handleEmail = (event) => {
    setemail(event.target.value)
    // console.log(email);
  }

  const handlePassword = (event) => {
    setpassword(event.target.value)
    // console.log(password);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = { firstname: firstname, lastname: lastname, mobileno: mobileno, email: email, password: password };
    // console.log(formData);

    if (firstname === "") {
      setformerror("First Name is required! Please enter your first name.");
    } else if (!firstname.match(nameexpression)) {
      setformerror("Invalid first name! First Name must contain only letters and be 2 to 15 characters long.");
    } else if (lastname === "") {
      setformerror("Last Name is required! Please enter your last name.");
    } else if (!lastname.match(nameexpression)) {
      setformerror("Invalid last name! Last Name must contain only letters and be 2 to 15 characters long.");
    } else if (mobileno === "") {
      setformerror("Mobile number is required! Please enter your mobile number.");
    } else if (!mobileno.match(mobilenoexpression)) {
      setformerror("Invalid mobile number! Mobile number must be exactly 10 digits.");
    } else if (email === "") {
      setformerror("Email is required! Please enter your email.");
    } else if (!email.match(emailexpression)) {
      setformerror("Invalid email format! Please enter a valid email, e.g., xyz123@gmail.com");
    } else if (password === "") {
      setformerror("Password is required! Please enter your password.");
    } else if (!password.match(passwordexpression)) {
      setformerror("Invalid password! Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.");
    } else if (location.pathname.split('/')[1] === "registration") {
      axios.post(`${API_BASE_URL}/users/registration`, formData).then((response) => {
        // console.log(response);
        navigate('/login');
      })

    } else if (location.pathname.split('/')[1] === "edit") {
      axios.put(`${API_BASE_URL}/users/updateuser/` + params.id, formData).then((response) => {
        navigate('/userlist');
      })
    } else if (location.pathname.split('/')[1] === "login") {

      axios.post(`${API_BASE_URL}/users/login`, formData).then((response) => {
        // console.log(response);

        if (response.data.message === "Either password or email is wrong") {
          setformerror(response.data.message);
        } else {
          localStorage.setItem('user_id',response.data.message.users_id);
          localStorage.setItem('firstname',response.data.message.firstname);
          localStorage.setItem('email',response.data.message.email);
          
          navigate('/userlist');
        }

      })
    }


  }

  return (
    <>
      <div id="form-top-container">
        <div id="form-container">
          <div className="header-form">{formname}</div>
          <form className="form">
            <div className='formerror'>{formerror}</div>
            {buttonname !== "Login" && <>
              <div className="input-box">
                <label for="firstname">First name </label>
                <input type="text" placeholder="First name" value={firstname} onChange={handleFirstname} />
              </div>
              <div className="input-box">
                <label for="lastname">Last name </label>
                <input type="text" placeholder="Last name" value={lastname} onChange={handleLastname} />
              </div>
              <div className="input-box">
                <label for="mobileno">Mobile no </label>
                <input type="text" placeholder="Mobile no" value={mobileno} onChange={handleMobileNo} />
              </div>
            </>}
            <div className="input-box">
              <label for="email">Email </label>
              <input type="email" placeholder="Email" value={email} onChange={handleEmail} />
            </div>
            <div className="input-box">
              <label for="password">Password</label>
              <input type="password" placeholder="Password" value={password} onChange={handlePassword} />
            </div>

            <input type="submit" value={buttonname} onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration;
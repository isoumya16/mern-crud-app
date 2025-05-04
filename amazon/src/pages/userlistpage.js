import React from 'react';
import Header from '../components/header';
import Userlist from '../components/userlist';
import Footer from '../components/footer';

const Userlistpage = () => {
  return (
    <>
    {<Header/>}
    {<Userlist/>}
    {<Footer/>}
    </>
  )
}

export default Userlistpage;
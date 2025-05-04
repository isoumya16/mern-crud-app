import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Count = () => {
    // const [count, setcount] = useState('');

    const count = useSelector(state => state);
  return (
    <>
    <h2>{count}</h2>
    </>
  )
}

export default Count;
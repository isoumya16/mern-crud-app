import React from 'react';
import {useDispatch} from 'react-redux';
import Count from './count';

const Reactredux = () => {
    const dispatch = useDispatch();

    return (
        <>
           <input type="button" value="Increment" onClick={(event) => dispatch({type : 'INCREMENT'}) }/>
           {<Count/>}
           <input type="button" value="Decrement" onClick={(event) => dispatch({type : 'DECREMENT'}) }/>
        </>
    )
}

export default Reactredux;
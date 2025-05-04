import React from 'react';
import { Consumercontext } from '../contextapi';

const Contextapi = () => {
    return (
        <>
            <Consumercontext>
                {(value) => (
                    <>
                        {value.name}{value.company}
                    </>
                )}
            </Consumercontext>
        </>
    )
}

export default Contextapi;
import React, { useRef, useState } from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleClick = () =>{
        setShow(!show)
    }

    return (
        <div>
            <h1>Real Example ref</h1>
            <hr />
            {show && <MultipleCustomHook></MultipleCustomHook>}
            <button onClick={ handleClick } className='btn btn-outline-primary'>{ show ? 'Ocultar' : 'Mostrar'} Tarjeta</button>
        </div>
    )
}

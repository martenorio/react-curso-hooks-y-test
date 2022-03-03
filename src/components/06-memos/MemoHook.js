import React, { useState } from 'react';
import { useMemo } from 'react/cjs/react.development';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { procesoPesado } from '../../helpers/procesoPersado';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true)
    ////cuando se clickeaba el boton show/hide volvia 
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h1>MemoHook</h1>
            <h3><small>{ counter }</small></h3>
            <hr />
            <p>{ memoProcesoPesado }</p>
            <button className='btn btn-primary' onClick={ increment }>+1</button>

            <button className='btn btn-secondary ml-1' onClick={ () => setShow(!show) } >
                show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

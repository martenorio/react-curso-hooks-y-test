import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state , increment , decrement , reset } = useCounter(123);

    return (
        <>
          <h1>Counter with hook: { state }</h1>  
          <hr />
          <button onClick={ () => increment(1) } className="btn btn-primary"> +1 </button>
          <button onClick={ reset } className="btn btn-secondary"> reset </button>
          <button onClick={ () => decrement(1) } className="btn btn-danger"> -1 </button>
        </>
    )
}

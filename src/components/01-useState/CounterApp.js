import React , { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState( { 
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40
    })
    const {counter1,counter2} = state;
    const addCounter = () => {
        setState({...state, counter1:counter1+1 });
    }
    // console.log(counter);
    return (
        <div>
            <>
            <h1>counter1 : { counter1 }</h1>
            <h1>counter2 : { counter2 }</h1>
            <hr />
            <button className="btn btn-primary" onClick={ addCounter }>+1</button>
            </>
        </div>
    )
}

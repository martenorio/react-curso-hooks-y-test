import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCouter] = useState( 10 );
    // const increment = () => {
    //     setCouter(couter +1);
    // }
    const increment = useCallback( (num)=> {
        setCouter(c => c + num);
    }, [setCouter])

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={increment}></ShowIncrement>
        </div>
    )
}

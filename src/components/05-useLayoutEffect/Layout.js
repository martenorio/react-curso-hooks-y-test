import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
// import '../02-useEffect/effects.css';
import './layout.css';

export const Layout = () => {
    const { counter, increment } = useCounter();
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({})
    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Breaking Quote</h1>
            <hr />
            <div>
                <blockquote className='blockquote text-end'>
                    <p className='mb-0' ref={ pTag }>{ quote }</p>
                    {/* <footer className='blockquote-footer'>{ author }</footer> */}
                </blockquote>
                <pre>{ JSON.stringify(boxSize, null, 3) }</pre>
                <button onClick={increment} className='btn btn-primary'>Siguiente quote</button>
            </div>
        </div>
    )
}

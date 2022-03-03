import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHook = () => {
    const { counter, increment } = useCounter();
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    return (
        <div>
            <h1>Breaking Quote</h1>
            <hr />
            {
                loading ?
                (
                    <div className='alert alert-info'>loading...</div>
                ) :
                (
                    <div>
                        <blockquote className='blockquote text-end'>
                            <p className='mb-0'>{ quote }</p>
                            <footer className='blockquote-footer'>{ author }</footer>
                        </blockquote>
                        <button onClick={increment} className='btn btn-primary'>Siguiente quote</button>
                    </div>
                )
            }
        </div>
    )
}

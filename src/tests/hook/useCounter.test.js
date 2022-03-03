import { act, renderHook } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Use counter', () => {
    test('Should return default values', () => {
        const { result } = renderHook( () =>  useCounter() )

        expect( result.current.counter ).toBe(1);
        expect( typeof result.current.increment ).toBe("function");
        expect( typeof result.current.decrement ).toBe("function");
        expect( typeof result.current.reset ).toBe("function");
    })
    test('should have counter at 100', () => {
        const { result } = renderHook( () =>  useCounter(100) )
        expect( result.current.counter ).toBe(100);
    })
    test('should increment counter by one', () => {
        const { result } = renderHook( () =>  useCounter(100) )
        const { increment } = result.current;
        act( () => increment()) 
        const { counter } = result.current;
        expect( counter ).toBe(101);
    })
    test('should decrement counter by one', () => {
        const { result } = renderHook( () => useCounter(100))
        const { decrement } = result.current;
        act( () => decrement() );
        const { counter } = result.current
        expect( counter ).toBe(99);
    })
    test('should reset the counter', () => { 
        const { result } = renderHook( () => useCounter())
        const { reset, increment } = result.current;
        act( () => {
            increment();
            reset();
        })
        const { counter } = result.current;
        expect( counter ).toBe( 1 )
    })
})
import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('useForm Test', () => { 
    const initialForm = {
        name:"miguel",
        email:"miguel@gmail.com"
    }
    test('should return a default form', () => { 
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ value, handleInputChange, reset ] = result.current;
        expect( value ).toEqual( initialForm );
        expect( typeof handleInputChange ).toEqual( "function" );
        expect( typeof reset ).toEqual( "function" );
    })
    test('should change value of the form', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;
        const newName = "Angel";
        const target = {target:{ name:"name", value: newName } };
        act( () => handleInputChange( target ) );
        const [ values ] = result.current;
        expect(values).toEqual({...initialForm, name:newName})
    })
    test('should reset the form', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;
        const newName = "Tenorio";
        const target = {target:{ name:"name", value: newName } };
        act( () => {
            handleInputChange( target );
            reset();
        } );
        const [ newValues ] = result.current;
        expect( newValues ).toEqual( initialForm );
     })
 })
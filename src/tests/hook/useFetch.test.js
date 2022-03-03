import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('useFetch Test', () => { 
    test('Should return default state', () => {
         const url = "https://www.breakingbadapi.com/api/quotes/1"
         const {result } = renderHook( () => useFetch(url))
         const { data, loading, error} = result.current;
         expect(data).toBe(null);
         expect(loading).toBe(true);
         expect(error).toBe(null);

     } )
     test('Should return information, loading : false, error:false', async() => {
        const url = "https://www.breakingbadapi.com/api/quotes/1"
        const {result, waitForNextUpdate } = renderHook( () => useFetch(url))
        await waitForNextUpdate({timeout:4000});
        const { data, loading, error} = result.current;
        expect( data.length ).toBe(1);
        expect( loading ).toBe( false );
        expect( error ).toBe( null );
    } )
    test('Should catch error', async() => {
        const url = "https://reqres.in/apid/users?page=2"
        const {result, waitForNextUpdate } = renderHook( () => useFetch(url))
        await waitForNextUpdate({timeout:4000});
        const { data, loading, error} = result.current;
        expect( data ).toBe(null);
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se pudo cargar la informacion' );
    } )
 })
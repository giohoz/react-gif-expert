import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Tests in useFetchGifs', () => {

    test('Should return to the initial state ', () => {
        const { result } = renderHook( () => useFetchGifs('Kirby') );

        const { images, isLoading } = result.current;

        expect(images.length).toBe( 0 );
        expect(isLoading).toBeTruthy();
    })

    //Debemos utilisar el async para poder aplicar el waitFor
    test('Should return an array of images and isLoading equal false', async() => {
        const { result } = renderHook( () => useFetchGifs('Kirby') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),{timeout: 5000}
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan( 0 );
        expect(isLoading).toBeFalsy();

    })
    
  
})

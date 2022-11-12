import { getGifs } from "../../src/helpers/GetGifs"

describe('Tests in helper GetGifs', () => {

    test('Should return an array of gifs', async() => {
        const gifs = await getGifs('gatos');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
    
  
})

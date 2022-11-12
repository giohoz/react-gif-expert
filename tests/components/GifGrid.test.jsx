import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <GifGrid/>', () => {

    const category = "Persona 5";
  
    test('Should show the message loading at the start', () => {
        useFetchGifs.mockReturnValue(
            {images: [],
            isLoading: true}
        );

        render(<GifGrid category = { category }></GifGrid>);
        expect( screen.getByText( 'Loading...' ) ).toBeTruthy();
        expect( screen.getByText( category ) ).toBeTruthy();
    });

    test('Should display items when images are loaded from useFetchGifs ', () => {

        const gifs = [{
            id: 'ABC',
            title: 'Pokemon',
            url: 'http://pokemon.com/charmander.jpg'
        },
        {
            id: 'ABCD',
            title: 'Goku',
            url: 'http://dragonball.com/Goku.jpg' 
        }];
        
        useFetchGifs.mockReturnValue(
            {images: gifs,
            isLoading: false,}
        );
      
       render(<GifGrid category = { category }></GifGrid>);
       expect( screen.getAllByRole('img').length ).toBe(2);
    })
    
    
})

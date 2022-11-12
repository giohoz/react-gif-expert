import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Tests in GifItem', () => {

    const title = "Test";
    const url = "https://sword-art-online.com/sao.jpg";

    test('Should match the snapshot', () => {
        const { container } = render (<GifItem title={title} url={url} ></GifItem>);
        expect(container).toMatchSnapshot();
    });

    test('Should display the image with the URL and ALT indicated.', () => {

        render (<GifItem title={title} url={url} ></GifItem>);
        // expect( screen.getByRole("img").src ).toBe( url );
        // expect( screen.getByRole("img").alt ).toBe( title );
        const { src, alt } = screen.getByRole("img");
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
        
    })

    test('Should display the title in the component', () => {

        render (<GifItem title={title} url={url} ></GifItem>);
        expect( screen.getByText( title ) ).toBeTruthy();
      
    })
    
    
    
  
})

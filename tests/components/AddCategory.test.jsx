import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test in <AddCategory/>', () => {
    test('Should the value of the text box', () => {
        render(<AddCategory onNewCategory={ () => {} }></AddCategory>);
        const input = screen.getByRole("textbox");

        fireEvent.input( input, { target: {value: "Mario Bros"} } );
        
        expect( input.value ).toBe( "Mario Bros" );
    })

    test('Should call on onNewCategory if the input is not null', () => {

        const inputValue = "Kirby";
        //Creamos una funcion especial para poder hacer el test
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form"); //al Formulario hay que ponerle un aria-label porque si no, el test no puede el encontrar los forms por si solo
        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );

        expect( input.value ).toBe( "" );

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

      
    })

    test('Should not call on onNewCategory if the input is null', () => {

        const inputValue = "";
        //Creamos una funcion especial para poder hacer el test
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>);
        const form = screen.getByRole("form"); //al Formulario hay que ponerle un aria-label porque si no, el test no puede el encontrar los forms por si solo
        fireEvent.submit( form );


        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

      
    })
    
    
  
})

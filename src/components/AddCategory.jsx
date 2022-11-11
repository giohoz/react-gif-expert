import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();//Esta funcion sirve para evitar un refresh del navegador web
        if( inputValue.trim().length < 1 ) return;
        // setCategories( cat => [inputValue, ...cat] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={ inputValue } 
            onChange={ onInputChange }
        ></input>
    </form>
    
  )
}


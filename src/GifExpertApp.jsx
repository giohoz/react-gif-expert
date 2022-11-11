import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['Sword Art Online']);

	const onAddCategory = ( newCategory ) =>{
		//categories.push( 'Test' );// Esta version no es recomendada
		//setCategories( [...categories, 'Hola mundo'] ); Primer forma de hacerlo
		if( categories.includes(newCategory) ) return;
		setCategories( cat => [newCategory, ...cat] );
	}

  return (
    <>
    	<h1>Gif Expert App</h1>

		<AddCategory 
			onNewCategory={ event =>  onAddCategory(event)  }
		></AddCategory>

		{/* <button onClick={ onAddCategory }>Agregar</button> */}

		{ categories.map( category =>  (
				<GifGrid key = { category } category = { category }></GifGrid>
			)) 
		}

    </>
  )
}


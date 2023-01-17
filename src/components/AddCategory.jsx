import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

    const [ inputValue, setInputValue ] = useState('')

    //recoge el valor del input
    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
        //console.log( event.target.value )
    }

    //Al hacer submit, coge el valor del input y lo envía al parámetro onNewCaegory
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        //setCategories( (categories) => [ inputValue, ...categories] );
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

  return (

    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
            type="text"
            placeholder='Buscar gifs'
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
        />
    </form>
  )
}

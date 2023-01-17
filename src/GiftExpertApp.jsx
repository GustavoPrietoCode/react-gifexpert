//import React from 'react'
import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

//kL1m0AkwS5XNKs9vPFG3qbJh1NVpTU9w

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  //Recibe por parámetro el valor introducido por el input por el componente AddCategory
  const onAddCategory = ( newCategory) => {
    //console.log(newCategory)

    if( categories.includes (newCategory) ) return
    //setCategories( [ ...categories, 'Valorant']) //otra forma de modificarlo
    setCategories( cat=> [ newCategory, ...cat ] ) //Modifica el estado, en este caso, el array de useState, añadiendo valores
  }
 
  return (
    <>
        {/* título */}
        <h1>GifExpertApp</h1>

        {/* input en otro componente */}
        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value)}
        />

          {/* Usualmente se quitan las llaves {} y el return */}
          { categories.map( category => {
            return (
                  <GifGrid 
                    key={ category } 
                    category={ category }/> 
                )} )
          }

      
          {/* Gif item */}

    </>
  )
}

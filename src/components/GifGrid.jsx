//shortcode: rafc
//componentes
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category ); //custom hook
  //console.log( {isLoading})

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading &&  ( <h2>Cargando...</h2> ) //condicional...
        }

        <div className='card-grid'>
          { 
              images.map( ( image ) => (
                  <GifItem 
                      key={ image.id }
                      // title={ image.title }
                      // url={ image.url }
                      {...image}
                  />
              ))
            }
        </div>
    </>
  )
}

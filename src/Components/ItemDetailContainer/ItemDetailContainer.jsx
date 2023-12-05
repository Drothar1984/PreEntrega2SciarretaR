//detalle de elementos
//importamos los hook necesarios
import { useState, useEffect } from 'react'
//importamos los hooks para acceder a los parametros de la URL
import { useParams } from 'react-router-dom'
//archivo productos para usar
import arrayProductos from '../Json/arrayProductos.json'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

      //array vacio que va a tomar la informacion del json
      const [item, setItem] = useState ([]);
      const {id} = useParams ();
  
      //representamos una asincronia - creando una promesa que se resuelva - con posibles escenarios
      useEffect(() => {        
        //dentro de promesa instancia una nueva promesa
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item=> item.id === parseInt(id)))
            }, 2000);
        });
        promesa.then((data)=>{
            setItem(data)
        })
      }, [id])
      
      return (
  
          <div className='contenedor-bienvenida-principal'>       
            <div>
                <ItemDetail item = {item} />
            </div>                     
          </div>
      
      )
  
  }
  

export default ItemDetailContainer
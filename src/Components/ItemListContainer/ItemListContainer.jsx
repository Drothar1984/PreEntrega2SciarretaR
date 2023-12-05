//pagina principal render

//importamos los hook necesarios -
import { useState, useEffect } from 'react'
//importamos los hooks para acceder a los parametros de la URL -
import { useParams } from 'react-router-dom'

//archivo productos para usar -
import arrayProductos from '../Json/arrayProductos.json'

//importamos el ItemList que es donde -------> DAMOS LA FUNCIONALIDAD DEL MAP EN ITEMLIST 
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting}) => {

    //array vacio que va a tomar la informacion del json
    const [item, setItem] = useState ([]);
    const {id} = useParams ();

    //representamos una asincronia - creando una promesa que se resuelva - con posibles escenarios
    useEffect(() => {
        //funcion fetch - asincronica
        const fetchData = async () => {
            try{
                //intancia de promesa a resolver
                const data = await new Promise((resolve) => {
                    setTimeout (() => {
                        //resolve - si el id existe, haceme un filter del array - en esta oportunidad por categoria - sino existe (representado por los ":") mostrar todo el json
                        resolve (id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
                    //tiempo de espera
                    }, 2000);
                })
            //actualizamos la variable - data 
            setItem (data);
            //en el caso de surgir error
            }catch(error){
                //de surgir lo consologea
                console.log("Me lleva el .... ", error);
            }
        }
        fetchData();
    }, [id])
    

    //agregamos los contenedores y la funcion itemlist, con el parametro item y su prop item
    return (

        <div className='contenedor-bienvenida-principal'>            

            <div>
                <h3 className='texto-bienvenida'>{greeting}</h3>
                <ItemList  item = {item} />
            </div>            
            
        </div>
    
    )

}

export default ItemListContainer
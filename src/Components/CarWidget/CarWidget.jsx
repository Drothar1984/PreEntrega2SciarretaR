//funcion primaria del carrito de compras

//agregamos la importacion del icono carrito, poniendo entre {el mismo nombre del elemento}, desde 'react-icons/bs' (bs porque son las dos primeras letras del elemento) BsFillCartCheckFill = bs
import {BsFillCartCheckFill} from 'react-icons/bs' 

const CarWidget = () => {

    return (

        <div>
            <button><BsFillCartCheckFill/></button>
        </div>
    
    )

}

export default CarWidget
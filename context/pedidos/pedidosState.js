import React, { useReducer } from 'react';
import PedidoContext from './pedidosContext';
import PedidosReducer from './pedidosReducer';
import { SELECCIONAR_PRODUCTO, CONFIRMAR_ORDENAR_PLATILLO, MOSTRAR_RESUMEN, ELIMINAR_PRODUCTO } from '../../types'

const PedidoState = (props) => {

    //crear state
    const initialState = {
        pedido: [],
        platillo: null,
        total: 0,
    }

    //useReducer con dispatch para ejecucion
    const [ state, dispatch ] = useReducer(PedidosReducer, initialState)

    //seleccionar platillo qeu usuario desee
    const seleccionarPlatillo = (platillo) => {
        //console.log(platillo)
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })
    }
    //CUANDO USUARIO CONFIRMA UN PEDIDO - FORMULARIO PLATILLO -> RESUMEN LUEGO PANTALLA
    const guardarPedido = (pedido) => {
        dispatch({
            type: CONFIRMAR_ORDENAR_PLATILLO,
            payload: pedido
        })
    }
    //MUESTRA EL TOTAL A PAGAR DE LA PANTALLA RESUMEN PEDDIDO
    const mostrarResumen = total => {
        dispatch({
            type: MOSTRAR_RESUMEN,
            payload: total
        })
    }
    //ELIMINA UN ARTICULO DEL PEDIDO PANTALLA RESUMEN PEDIDO
    const eliminarProducto = (id) => {
        dispatch({
            type: ELIMINAR_PRODUCTO,
            payload: id
        })
    }


    return(
        <PedidoContext.Provider 
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                total: state.total,
                seleccionarPlatillo,
                guardarPedido,
                mostrarResumen,
                eliminarProducto
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState
import React, { useReducer } from 'react';
import PedidoContext from './pedidosContext';
import PedidosReducer from './pedidosReducer';
import { SELECCIONAR_PRODUCTO, CONFIRMAR_ORDENAR_PLATILLO } from '../../types'

const PedidoState = (props) => {

    //crear state
    const initialState = {
        pedido: [],
        platillo: null
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

    return(
        <PedidoContext.Provider 
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                seleccionarPlatillo,
                guardarPedido
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState
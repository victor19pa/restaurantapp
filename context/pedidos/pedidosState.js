import React, { useReducer } from 'react';
import PedidoContext from './pedidosContext';
import PedidosReducer from './pedidosReducer';
import { SELECCIONAR_PRODUCTO } from '../../types'

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
        console.log(platillo)
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo //es lo que cambia el states
        })
    };


    return(
        <PedidoContext.Provider 
            value={{
                pedido: state.pedido,
                seleccionarPlatillo
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState
import React, { useReducer } from 'react';
import PedidoContext from './pedidosContext';
import PedidosReducer from './pedidosReducer';

const PedidoState = (props) => {

    //crear state
    const initialState = {
        pedido: []
    }

    //useReducer con dispatch para ejecucion
    const [ state, dispatch ] = useReducer(PedidosReducer, initialState)


    return(
        <PedidoContext.Provider 
            value={{
                pedido: state.pedido
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState
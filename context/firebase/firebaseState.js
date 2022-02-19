import React, { useReducer } from 'react';
import firebase from '../../firebase';
import { OBTENER_PRODUCTOS } from '../../types';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';

const FirebaseState = (props) => {

    //console.log(firebase)

    //crear state
    const initialState = {
        menu: []
    }

    //useReducer con dispatch para ejecucion
    const [ state, dispatch ] = useReducer(FirebaseReducer, initialState)

    //funcion traer productos
    const obtenerProductos = () =>{
        //console.log('desde firebase state')
    }


    return(
        <FirebaseContext.Provider 
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState
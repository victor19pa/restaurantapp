import React, { useReducer } from 'react';
import firebase from '../../firebase';
import { OBTENER_PRODUCTOS_EXITO } from '../../types';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';
import _ from 'lodash';

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
        //console.log('desde firebase state'
        firebase.db.collection('productos').where('existencia','==',true).onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot){
            let platillos = snapshot.docs.map( doc => {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            //ordenar por categoria
            // Ordenar por categoria con lodash
            platillos = _.sortBy(platillos, 'categoria');
            //console.log(platillos)
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platillos
            })
        }
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
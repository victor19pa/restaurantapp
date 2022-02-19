import React, { useReducer } from 'react';
import firebase from '../../firebase';
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


    return(
        <FirebaseContext.Provider 
            value={{
                menu: state.menu
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState
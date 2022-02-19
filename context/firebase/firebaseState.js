import React, { useReducer } from 'react';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';

const FirebaseState = (props) => {

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
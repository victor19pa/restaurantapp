import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';

const Menu = () => {

    //context firebase
    const { obtenerProductos } = useContext(FirebaseContext);

    useEffect(() =>{
        obtenerProductos();
    },[])
    return (  
        <Text>Menu</Text>
    );
}
 
export default Menu;
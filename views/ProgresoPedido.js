import { useNavigation } from '@react-navigation/native';
import { Button, Container, H1, H3, Text } from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import firebase from '../firebase'
const ProgresoPedido = () => {
    //con este id podedmos consultar la base de firebase
    const { idpedido } = useContext(PedidoContext);

    const [ tiempo, setTiempo ] = useState(0)
    
    useEffect(() => {
        const obtenerProducto = () => {
            firebase.db.collection('ordenes')
                .doc(idpedido)
                .onSnapshot(function(doc){
                    setTiempo(doc.data().tiempoentrega)
                })   
        }
        obtenerProducto()
    },[])
    return (  
        <Text>{tiempo}</Text>
    );
}
 
export default ProgresoPedido;
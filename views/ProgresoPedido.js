import { useNavigation } from '@react-navigation/native';
import { Button, Container, H1, H3, Text } from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';

const ProgresoPedido = () => {
    //con este id podedmos consultar la base de firebase
    const { idpedido } = useContext(PedidoContext);

    return (  
        <Text>{idpedido}</Text>
    );
}
 
export default ProgresoPedido;
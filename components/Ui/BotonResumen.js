import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'native-base';
import React, { useContext } from 'react';
import { Alert, StyleSheet } from 'react-native';
import PedidoContext from '../../context/pedidos/pedidosContext';
import globalStyles from '../../styles/global';

const BotonResumen = () => {

    const navigation = useNavigation()

    //leer pedido
    const { pedido } = useContext(PedidoContext);

    if(pedido.length === 0) return null
    return (  
        <Button 
            style={[globalStyles.boton, styles.botonRsm]}
            onPress={() => navigation.navigate('ResumenPedido')}   
        >
            <Text style={globalStyles.botonTxt}>Ir a Pedido</Text>
        </Button>    
    );
}

const styles = StyleSheet.create({
    botonRsm:{
        marginLeft: 40,
        borderRadius: 8,
    }
})
 
export default BotonResumen;
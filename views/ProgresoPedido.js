import { useNavigation } from '@react-navigation/native';
import { Button, Container, H1, H3, Text } from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import firebase from '../firebase'
import Countdown from 'react-countdown'

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

    //muesstra countdown
    const renderer = ({minutes, seconds}) => {
        

        return(
            <Text style={styles.tiempo}>{minutes}:{seconds}</Text>
        )
    };

    return (  
        <Container style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, {marginTop: 50}]}>
                { tiempo === 0 && (
                    <>
                        <Text style={{textAlign: 'center'}}>Hemos recibido tu orden...</Text>
                        <Text style={{textAlign: 'center'}}>Estamos calculando el tiempo de entrega</Text>
                    </>
                )}
                {tiempo > 0 && (
                    <>
                        <Text style={{textAlign: 'center'}}>Su orden estara lista en </Text>
                        <Text>
                            <Countdown 
                                date={Date.now() + tiempo * 60000}
                                renderer={renderer}
                            />
                        </Text>
                    </>
                )}
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    tiempo:{
        marginBottom: 20,
        marginTop: 30,
        fontSize: 60,
        textAlign: 'center'
    }
})
 
export default ProgresoPedido;
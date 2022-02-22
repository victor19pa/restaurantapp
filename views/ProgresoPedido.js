import { useNavigation } from '@react-navigation/native';
import { Button, Container, H1, H3, Text } from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import firebase from '../firebase'
import Countdown from 'react-countdown'

const ProgresoPedido = () => {

    const navigation = useNavigation();
    //con este id podedmos consultar la base de firebase
    const { idpedido } = useContext(PedidoContext);

    const [ tiempo, setTiempo ] = useState(0)
    const [ completado, setCompletado ] = useState(false)
    
    useEffect(() => {
        const obtenerProducto = () => {
            firebase.db.collection('ordenes')
                .doc(idpedido)
                .onSnapshot(function(doc){
                    setTiempo(doc.data().tiempoentrega)
                    setCompletado(doc.data().completado)
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
                {!completado && tiempo > 0 && (
                    <>
                        <Text style={{textAlign: 'center'}}>Su orden estara lista en </Text>
                        <Text style={{textAlign: 'center'}}>
                            <Countdown 
                                date={Date.now() + tiempo * 60000}
                                renderer={renderer}
                            />
                        </Text>
                    </>
                )}
                {completado &&(
                    <>
                        <H1 style={styles.textoCompletado}>Orden Lista</H1>
                        <H3 style={styles.textoCompletado}>Por favor pase a recoger su pedido</H3>

                        <Button 
                            style={[globalStyles.boton, {marginTop: 100}]} 
                            full 
                            rounded 
                            block
                            onPress={ () => navigation.navigate('Menu')} 
                        >
                            <Text style={globalStyles.botonTxt}>Comenzar una orden nueva</Text>
                        </Button>
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
        //textAlign: 'center'
    },
    textoCompletado:{
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 20
    }
})
 
export default ProgresoPedido;
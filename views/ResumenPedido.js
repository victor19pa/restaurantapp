import React, { useContext, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Left, Body, Button, Text, Footer, FooterTab, H1 } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global';
import PedidoContext from '../context/pedidos/pedidosContext';
import firebase from '../firebase'

const ResumenPedido = () => {

    const navigation = useNavigation();

    // context de pedido
    const { pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado } = useContext(PedidoContext);
    //console.log(pedido)
    useEffect(() => {
        calcularTotal();
    }, [pedido]);
    //calcula el total para mostrar en resumen
    const calcularTotal = () => {
        let nuevoTotal = 0;
        nuevoTotal = pedido.reduce( (nuevoTotal, articulo) => nuevoTotal + articulo.total, 0);
        mostrarResumen(nuevoTotal)
    }
    //boton de pagar confimarcion
    const progresoPedido = () => {
        Alert.alert(
            '¿Desea confimar su pedido?',
            'Un pedido confirmado no se puede editar',
            [
                {
                    text: 'Confirmar',
                    onPress: async () => {
                        //crear obj
                        const pedidoObj = {
                            tiempoentrega: 0,
                            completado: false,
                            total: Number(total),
                            orden: pedido, //array
                            creado: Date.now()
                        }
                        //console.log(pedidoObj)
                        //escribir en firebase
                        try {
                            const pedido = await firebase.db.collection('ordenes').add(pedidoObj)
                            //va tomar el id almacenado y colocarla en el state para tenerla en la siguiente pantalla Progreso Pedido
                            pedidoRealizado(pedido.id)
                            //redireccionar
                            navigation.navigate('ProgresoPedido')
                        } catch (error) {
                            console.log(error)
                        }
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }
    //elimina alguna orden del pedido
    const confirmarEliminar = (id) => {
        Alert.alert(
            '¿Desea eliminar este articulo?',
            'Un vez eliminado, tendra que volver a pedirlo en menu ',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        //eliminar producto del state
                        eliminarProducto(id)
                        //cancelar el precio lo hace en el useEffect
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    return (  
        <Container style={globalStyles.contenedor}>
            <Content style={globalStyles.contenido}>
                <H1 style={globalStyles.titulo}>Resumen Pedido</H1>
                {pedido.map((platillo, i)=>{
                    const { cantidad, nombre, imagen, id, precio} = platillo
                    return(
                        <List key={id + i}>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail large square source={{uri: imagen}}/>
                                </Left>
                                <Body>
                                    <Text>{nombre}</Text>
                                    <Text>Cantidad: {cantidad}</Text>
                                    <Text>Precio c/u: L{precio}</Text>
                                    <Button 
                                        onPress={() => confirmarEliminar(id)}
                                        full
                                        danger
                                        style={{marginTop: 20}}
                                    >
                                        <Text style={[globalStyles.botonTxt, {color: '#FFF'}]}>
                                            Eliminar
                                        </Text>
                                    </Button>
                                </Body>
                            </ListItem>
                        </List>
                    )
                })}
                <Text style={globalStyles.cantidad}>Total a pagar: L{total}</Text>

                <Button 
                    onPress={() => navigation.navigate('Menu')}
                    style={ styles.botonPidiendo }
                    full
                    dark
                >
                    <Text style={styles.botonPidiendoTxt}>Seguir pidiendo</Text>
                </Button>

            </Content>
            <Footer>
                    <FooterTab>
                        <Button 
                            onPress={() => progresoPedido()}
                            style={globalStyles.boton}
                            full
                        >
                            <Text style={[globalStyles.botonTxt, {fontSize: 16}]}>Pagar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    botonPidiendo:{
        marginTop: 30
    },
    botonPidiendoTxt:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14
    }
})
 
export default ResumenPedido;
import React, { useContext, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Left, Body, Button, Text, Footer, FooterTab, H1 } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global';
import PedidoContext from '../context/pedidos/pedidosContext';

const ResumenPedido = () => {

    const navigation = useNavigation();

    // context de pedido
    const { pedido, total, mostrarResumen } = useContext(PedidoContext);
    //console.log(pedido)
    
    useEffect(() => {
        calcularTotal();
    }, [pedido]);

    const calcularTotal = () => {
        let nuevoTotal = 0;
        nuevoTotal = pedido.reduce( (nuevoTotal, articulo) => nuevoTotal + articulo.total, 0);
        mostrarResumen(nuevoTotal)
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
                            onPress={() => navigation.navigate('ProgresoPedido')}
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
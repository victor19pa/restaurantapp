import React, { useContext, useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Container, Content, Form, Icon, Input, Grid, Col, Button, Text, Footer, FooterTab } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global';
import PedidoContext from '../context/pedidos/pedidosContext';

const FormularioPlatillo = () => {

    //state para cantidad
    const [ cantidad, setCantidad ] = useState(1)
    const [ total, setTotal ] = useState(0)

    //context pedido
    const { platillo, guardarPedido } = useContext(PedidoContext)
    const { precio } = platillo

    //calcular catnidad a pagar no mas cargue el comp
    useEffect(() => {
        calcularTotal()
    },[cantidad])

    //Manejar cantidad via input
    const incrementarUno = () => {
         const nuevaCantidad = parseInt(cantidad) + 1;
         setCantidad(nuevaCantidad)
    };
    const decrementarUno = () => {
        if(cantidad > 1){
            const nuevaCantidad = parseInt(cantidad) - 1;
            setCantidad(nuevaCantidad)
        }   
    };
   //calcular total
    const calcularTotal = () => {
        const totalPagar = precio * cantidad;
        setTotal(totalPagar)
    };
    //confirmar orde
    const confirmarOrden= () =>{
        Alert.alert(
            '¿Desea confimar su pedido',
            'Un pedido confirmado no se puede editar',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        //almacenar el pedido al pedido principal
                        const pedido = {
                            ...platillo,
                            cantidad,
                            total
                        }
                        guardarPedido(pedido)
                        navigation.navigate('ResumenPedido')
                        //console.log(pedido)
                        //navegar hacia resumen
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }
    const navigation = useNavigation()

    return (  
        <Container>
            <Content>
                <Form>
                    <Text style={globalStyles.titulo}>Cantidad</Text>
                    <Grid>
                        <Col>
                            <Button
                                props
                                dark
                                style={styles.botonIcon}
                                onPress={ () => decrementarUno()}
                            >
                                <Icon 
                                    name='remove'
                                    style={{ fontSize: 40}}
                                >
                                </Icon>
                            </Button>
                        </Col>
                        <Col>
                            <Input 
                                value={cantidad.toString()}
                                style={{textAlign: 'center', fontSize: 20}}
                                keyboardType='numeric'
                                onChangeText={ (cantidad) => setCantidad(cantidad)}
                            />
                        </Col>
                        <Col>
                            <Button
                                props
                                dark
                                style={styles.botonIcon}
                                onPress={ () => incrementarUno()}
                            >
                                <Icon 
                                    style={{ fontSize: 40}}
                                    name='add'
                                >
                                </Icon>
                            </Button>
                        </Col>
                    </Grid>
                    <Text style={globalStyles.cantidad}>Subtotal: L{total}</Text>
                </Form>
            </Content>

            <Footer>
                <FooterTab>
                    <Button 
                        style={globalStyles.boton}  
                        onPress={() => confirmarOrden()} 
                    >
                        <Text style={globalStyles.botonTxt}>Agregar al pedido</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    botonIcon:{
        height: 80, 
        justifyContent: 'center',
        width: '100%',
        borderRadius: 8
    }
})
 
export default FormularioPlatillo;
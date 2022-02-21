import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Icon, Input, Grid, Col, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global';
import PedidoContext from '../context/pedidos/pedidosContext';

const FormularioPlatillo = () => {
    //state para cantidad
    const [ cantidad, setCantidad ] = useState(1)

    //almacenar cantidad via input
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
                </Form>
            </Content>
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
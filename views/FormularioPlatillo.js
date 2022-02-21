import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Icon, Input, Grid, Col, Button, Body, Text, H1, Card, CardItem } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import globalStyles from '../styles/global';
import PedidoContext from '../context/pedidos/pedidosContext';

const FormularioPlatillo = () => {
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
                                value='1'
                                style={{textAlign: 'center', fontSize: 20}}
                            />
                        </Col>
                        <Col>
                            <Button
                                props
                                dark
                                style={styles.botonIcon}
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
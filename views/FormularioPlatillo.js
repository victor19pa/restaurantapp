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
                            <Button>
                                <Icon name='remove'></Icon>
                            </Button>
                        </Col>
                        <Col>
                            <Text>2</Text>
                        </Col>
                        <Col>
                            <Button>
                                <Icon name='remove'></Icon>
                            </Button>
                        </Col>
                        
                    </Grid>
                </Form>
            </Content>
        </Container>
    );
}
 
export default FormularioPlatillo;
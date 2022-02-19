import { Button, Container, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const NuevaOrden = () => {
    return (  
        
        <Container>
            <View>
                <Button
                    rounded
                    block
                >
                    <Text>Crear nueva orden</Text>
                </Button>
            </View>
        </Container>
       
    );
}


 
export default NuevaOrden;
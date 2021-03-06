import { useNavigation } from '@react-navigation/native';
import { Button, Container, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import globalStyles from '../styles/global';

const NuevaOrden = () => {

    const navigation = useNavigation();
    return (  
        
        <Container style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, styles.contenido]}>
                <Button
                    style={globalStyles.boton}
                    rounded
                    block
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style={globalStyles.botonTxt}>Crear nueva orden</Text>
                </Button>
            </View>
        </Container>
       
    );
}

const styles = StyleSheet.create({
    contenido:{
        flexDirection: 'column',
        justifyContent: 'center'
    }
})
 
export default NuevaOrden;
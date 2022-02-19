import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NuevaOrden from './views/NuevaOrden';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import Menu from './views/Menu';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';
//importar state context
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';
//localhost:8081
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator()

const App = () => {

  return (
    <>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle:{
                  backgroundColor: '#FFDA00'
                },
                headerTitleStyle:{
                  fontWeight: 'bold',
                },
                headerTitleAlign: 'center'
              }}
            >
              <Stack.Screen 
                name='NuevaOrden'
                component={NuevaOrden}
                options={{
                  title:'Nueva Orden',
                }}
              />
              <Stack.Screen 
                name='Menu'
                component={Menu}
                options={{
                  title:'Nuestro Menu',
                }}
              />
              <Stack.Screen 
                name='DetallePlatillo'
                component={DetallePlatillo}
                options={{
                  title:'Detalle Platillo',
                }}
              />
              <Stack.Screen 
                name='Formulario Platillo'
                component={FormularioPlatillo}
                options={{
                  title:'Formulario Platillo',
                }}
              />
              <Stack.Screen 
                name='ResumenPedido'
                component={ResumenPedido}
                options={{
                  title:'Resumen Pedido',
                }}
              />
              <Stack.Screen 
                name='ProgresoPedido'
                component={ProgresoPedido}
                options={{
                  title:'Progreso de Pedido',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

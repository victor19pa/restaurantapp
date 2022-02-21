import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    contenedor:{
        flex: 1,

    },
    contenido:{
        flex: 1,
        marginHorizontal: '2.5%'
    },
    boton:{
        backgroundColor: '#FFDA00',

    },
    botonTxt:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000'
    },
    titulo:{
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 30
    },
    imagen:{
        height: 300,
        width: '100%'

    }
})

export default globalStyles
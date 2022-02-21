import { Container, Content, List, ListItem, Separator, Thumbnail, Text, Left, Body } from 'native-base';
import React, { Fragment, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import globalStyles from '../styles/global';

const Menu = () => {

    //context firebase
    const { menu, obtenerProductos } = useContext(FirebaseContext);

    useEffect(() =>{
        obtenerProductos();
        //console.log(menu)
    },[])

    const mostrarHeading = (categoria, i) => {
        if(i>0){
            const categoriaAnterior = menu[i-1].categoria
            if(categoriaAnterior !== categoria){
                return(
                    <Separator style={styles.separador}>
                        <Text style={styles.separadorTxt}>{categoria}</Text>
                    </Separator>
                )
            }
        }else{
            return(
                <Separator style={styles.separador}>
                    <Text style={styles.separadorTxt}>{categoria}</Text>
                </Separator>
            )
        }
    };

    return (  
        <Container style={globalStyles.contenedor}>
            <Content style={{backgroundColor: '#FFF'}}>
                <List>
                    {menu.map((platillo, i) => {
                        const { imagen, nombre, descripcion, categoria, precio, id } = platillo

                        return(
                            <Fragment key={id}>
                                {mostrarHeading(categoria, i)}
                                <ListItem 

                                >
                                    <Thumbnail
                                        large
                                        square
                                        source={{uri: imagen}}
                                    />
                                    <Body>
                                        <Text>{nombre}</Text>
                                        <Text
                                            note
                                            numberOfLines={2}
                                        >
                                            {descripcion}
                                        </Text>
                                        <Text>Precio: L{precio}</Text>
                                    </Body>
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    separador:{
        backgroundColor: '#000'
    },
    separadorTxt:{
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14
    }
})
 
export default Menu;
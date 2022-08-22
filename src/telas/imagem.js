import React from "react";
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
const largura = Dimensions.get('screen').width ;


export default function RetornaImagem (props){
    return(
        <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>{props.texto}</Text>

            <View style={estilos.cesta}>
                <Text style={estilos.nome}>{props.nomeCesta}</Text>
                <View style={estilos.fazenda}>

                    <Image source={logo} style={estilos.imagemFazenda}/>
                    <Text style={estilos.nomeFazenda}>{props.fabricante}</Text>

                </View>

                <Text style={estilos.descricao}>{props.descricao}</Text>
                <Text style={estilos.preco}>{props.preco}</Text>
            </View>
       </>
    )
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        heigh: 578/768*largura,
    },
    texto: {
        fontSize: 22,
        fontWeight: "bold"
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 18,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16

    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "montSerratBold"
    },
    imagemFazenda:{
        width:32,
        height:32,

    },
    fazenda:{
       flexDirection:"row",
        paddingVertical: 12,

    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily:"montSerratRegular"

    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }


});
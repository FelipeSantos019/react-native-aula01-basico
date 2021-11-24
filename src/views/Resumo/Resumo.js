import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloResumo from './estiloResumo';

function Resumo() {

    return(

        <View style={estiloResumo.container}>
            <View style={estiloResumo.borda}>
                 
            <Text style={estiloResumo.texto01}> Cillian Murphy </Text>
                <Text style={estiloResumo.texto}>O Cillian Murphy é um ator conhecido por suas colaborações com o diretor Christopher Nolan, interpretando o Espantalho na trilogia de The Dark Knight (2005-2012) e aparecendo no thriller de ação e ficção científica Inception (2010) e no drama de guerra Dunkirk (2017). </Text>

                <TouchableOpacity style={estiloResumo.botaoContainer}>
                   <Text style={estiloResumo.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default Resumo;

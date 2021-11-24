import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhe';

function Detalhe() {
    return (
        <View style={estiloDetalhe.container}>
            <View style={estiloDetalhe.borda}>

                <Text style={estiloDetalhe.texto}>Você deseja voltar para a tela inicial? Aperte no botão abaixo!</Text>

                 <TouchableOpacity style={estiloDetalhe.botaoContainer}>
                    <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Detalhe;
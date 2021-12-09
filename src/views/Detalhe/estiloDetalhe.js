import { StyleSheet } from 'react-native'; 

const estiloDetalhe = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#000000', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    borda: { 
        backgroundColor: '#1C1C1C', 
        width: '70%', 
        height: '100%', 
       borderRadius: 10, 
    }, 
    texto01: { 
        fontSize: 25, 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        textAlign: "center", 
        padding: 10 
    }, 
    texto: { 
        fontSize: 18, 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        marginLeft: 100, 
        marginRight: 40, 
        padding: 10, 
        width: '80%', 
        height: '90%', 
        textAlign: "justify", 
    }, 
    texto02: { 
        fontSize: 18, 
        color: '#FFFFFF', 
        marginLeft: 100, 
        marginRight: 40, 
        fontWeight: 'bold', 
        width: '80%', 
        height: '90%', 
        textAlign: "justify", 
    }, 
    texto03: { 
        fontSize: 18, 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        marginLeft: 100, 
        marginRight: 40, 
        width: '80%', 
        height: '90%', 
        textAlign: "justify", 
    }, 
    texto04: { 
        fontSize: 18, 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
       textAlign: "center", 
        padding: 10 
    }, 
    botaoContainer: { 
        marginTop: 20, 
        marginBottom: 20, 
        marginLeft: 40, 
        marginRight: 40, 
        borderRadius: 5, 
        height: 40, 
        borderWidth: 2, 
        borderColor: '#FFFFFF', 
      backgroundColor: '#000000', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    botaoTexto: { 
        fontSize: 15, 
        color: '#FFFFFF', 
        fontWeight:'bold' 
    }, 
}); 
export default estiloDetalhe; 
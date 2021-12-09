import { StyleSheet} from 'react-native'; 

const estiloResumo = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#000000', 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    borda: { 
        backgroundColor: '#1C1C1C', 
        width: '80%', 
        height: '80%', 
        borderRadius: 10, 
    }, 
    texto02: { 
        fontSize: 20, 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        textAlign: "center", 
    }, 
    texto01: { 
        fontSize: 25, 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        textAlign: "center", 
        padding: 10 
    }, 
    texto: { 
        fontSize: 20, 
        color: '#FFFFFF', 
        margin: 10, 
        fontWeight: 'bold', 
        padding: 50, 
        width: '100%', 
        height: '90%', 
        textAlign: "justify", 
    }, 
    botaoContainer: { 
        marginTop: 20, 
        marginBottom: 20, 
        marginLeft: 40, 
        marginRight: 40, 
        borderRadius: 5, 
        height: 40,
        alignItems: 'center',
        borderWidth: 2, 
        borderColor: '#FFFFFF', 
        backgroundColor: '#000000', 
        justifyContent: 'center' 
    }, 
    botaoTexto: { 
        fontSize: 18, 
        color: '#FFFFFF', 
        fontWeight:'bold' 
    }, 
}); 
export default estiloResumo; 
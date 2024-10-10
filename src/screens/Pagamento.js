import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; 


export default function Pagamento({ route }) {
    return <View style={styles.container}>
        <Text style={styles.AbaTitle}>Pagamento</Text>
        <Image source={route.params.item.image} style={styles.image} />
        <Text style={styles.title}>{route.params.item.name}</Text>
        <Text style={styles.price}>{route.params.item.price}</Text>  
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
            <Text style={styles.PaymentMethodsTitle}>Formas de Pagamento</Text>
        <View style={styles.PaymentMethods}>
            <Image source={require('../img/pix.png')} style={styles.PaymentMethodImage} />
            <Image source={require('../img/Visa.jpg')} style={styles.PaymentMethodImage} />
            <Image source={require('../img/Mastercard.png')} style={styles.PaymentMethodImage} />
        </View>
    </View>
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    AbaTitle: {
        color: '#888',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        margin: 10,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        color: '#888',
        margin: 10,
        textAlign: 'center',
    },
    PaymentMethodsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    },
    PaymentMethods: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        
        
    },
    PaymentMethodImage : {
        width: 100,
        height: 60,
        borderRadius: 10,
    }

})  
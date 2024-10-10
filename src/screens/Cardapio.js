import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Cardapio() {
    const navigation = useNavigation();

    const menuItems = [
        { id: 1, name: 'Hamburguer Simples', price: 'R$ 19,99', image: require('../img/burguer.jpg') },
        { id: 2, name: 'Double Bacon Fries', price: 'R$ 29,99', image: require('../img/2xBacon+fries.jpg') },
        { id: 3, name: 'X-Monstro', price: 'R$ 39,99', image: require('../img/xMonstro.jpg') },
        { id: 4, name: 'Hamburguer + Fritas', price: 'R$ 49,99', image: require('../img/Combo.jpg') },
        { id: 5, name: 'Hamburguer Vegano', price: 'R$ 29,99', image: require('../img/vegan.jpg') },
        { id: 6, name: 'Hamburguer Australiano', price: 'R$ 39,99', image: require('../img/Australiano.jpg') },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Cardápio</Text>
                <Text style={styles.subtitle}>Hamburguers</Text>
                <Text style={styles.subtitle}>Experimente nossos deliciosos hamburguers!</Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentWrapper}>
                {menuItems.map((item) => (
                    <TouchableOpacity 
                        key={item.id}
                        style={styles.option}
                        onPress={() => navigation.navigate('Pagamento', { item })}
                    >
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.optionText}>{item.name}</Text>
                        <Text style={styles.optionPrice}>{item.price}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
    contentWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    option: {
        width: '48%',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        elevation: 3,
    },
    image: {
        width: 120,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    optionPrice: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
    },
});

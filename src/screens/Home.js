import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg'}} />

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao Restaurante </Text>
        <Text style={styles.description}>Delicie-se com nossa culinária excepcional</Text>

        <View style={styles.contentWrapper}>
          <View style={styles.smartphoneContainer}>
            <Image style={styles.smartphone} source={require('../img/Cel.png')} />
          </View>
          <View style={styles.smartphoneTextContainer}>
            <Text style={styles.smartphoneText}>Peça já!</Text>
            <Text>no</Text>
            <Text style={styles.ifood}>App</Text>
          </View>
        </View>

      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Cardapio')}
      >
        <Text style={styles.buttonText}>Cardápio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '30%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    content: {
        marginTop: '55%',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        bottom: 40,
        backgroundColor: '#FFD700',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    smartphone: {
      width: 100,
      height: 250,
      marginTop: 20,  
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    smartphoneTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    smartphoneText: {
      fontSize: 20,
    },
    smartphoneContainer: {  
      marginBottom: 5,
    },
    ifood : {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
      alignItems: 'center',
    }
});

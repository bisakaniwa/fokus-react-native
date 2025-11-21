import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from '../components/FokusButton';
import { Footer } from '../components/Footer';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          Otimize sua{'\n'} produtividade,{'\n'}
          <Text style={styles.bold}>
            mergulhe no que{'\n'} importa
          </Text>
        </Text>
        <Image source={require('../assets/images/home.png')} />
        <FokusButton
          title="Quero iniciar!"
          onPress={() => router.navigate('/pomodoro')}
        />
      </View>

      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  innerContainer: {
    gap: 16,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26,
  },
  bold: {
    fontWeight: 'bold',
  }
});

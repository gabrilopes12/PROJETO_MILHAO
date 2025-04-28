import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { AudioLines } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Fundo Azul */}
      <View style={styles.background}>

        {/* Cortinas Laterais */}
        <View style={styles.curtainLeft} />
        <View style={styles.curtainRight} />

        {/* Ícone de Som */}
        <TouchableOpacity style={styles.soundButton}>
          <AudioLines size={30} color="black" />
        </TouchableOpacity>

        {/* Texto Principal */}
        <Text style={styles.title}>POLIEDRO{"\n"}DO MILHÃO</Text>

        {/* Moeda */}
        <View style={styles.coin}>
          <Text style={styles.coinText}>$</Text>
        </View>

        {/* Dinheirinhos Animados Caindo */}
        {Array.from({ length: 8 }).map((_, index) => (
          <MotiView
            key={index}
            from={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: height, opacity: 1 }}
            transition={{
              delay: index * 500,
              duration: 4000,
              loop: true,
              type: "timing",
            }}
            style={[styles.moneyFlying, { left: (width / 8) * index }]}
          >
            <Text style={styles.money}>$</Text>
          </MotiView>
        ))}

        {/* Botões */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Jogar!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Histórico</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    backgroundColor: "#1145AA",
    alignItems: "center",
    justifyContent: "center",
  },
  curtainLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "30%",
    backgroundColor: "#AA3322",
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
  },
  curtainRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "30%",
    backgroundColor: "#AA3322",
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
  },
  soundButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    color: "#FFD700",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  coin: {
    width: 100,
    height: 100,
    backgroundColor: "#FFD700",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  coinText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
  },
  moneyFlying: {
    position: "absolute",
    top: -50,
  },
  money: {
    fontSize: 24,
    color: "#00FF00",
  },
  buttonsContainer: {
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#CC0000",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
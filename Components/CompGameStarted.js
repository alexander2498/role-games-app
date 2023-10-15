import {StyleSheet, Text, View} from "react-native";
import ButtonGoBack from "../Buttons/ButtonGoBack";

export default function CompGameStarted() {
  return(
    <View style={styles.back}>
      <View>
        <ButtonGoBack/>
      </View>
      <View style={styles.container} >
        <Text style={styles.start}>Game Started!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F5F5F5',
    height: 200,
    width: 200,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    flex: 1,
    backgroundColor: '#232323',
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 18,
    textAlign: "center",
  },
  start: {
    color: '#fff',
    fontSize: 24,
    textAlign: "center",
  }
});
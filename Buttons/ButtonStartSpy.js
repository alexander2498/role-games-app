import {useNavigation} from "@react-navigation/native";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function ButtonStartSpy() {
  const navigation = useNavigation();
  
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('game_spy')}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F5F5F5',
    height: 80,
    width: 200,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  }
});
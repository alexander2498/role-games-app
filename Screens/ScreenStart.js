import {StyleSheet, Text, View} from "react-native";
import ButtonGame from "../Buttons/ButtonsGames/ButtonGame";
import {StatusBar} from "expo-status-bar";

export default function ScreenStart({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose game to play</Text>
      <View>
        <ButtonGame title={"MAFIA"} onPress={() => navigation.navigate('mafia')}/>
        <ButtonGame title={"SPY"} onPress={() => navigation.navigate('spy')}/>
        <ButtonGame title={"PIMP"} onPress={() => navigation.navigate('pimp')}/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    paddingBottom: 20,
  }
});
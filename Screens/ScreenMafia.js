import {StyleSheet, View} from "react-native";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonRole from "../Buttons/ButtonsRoles/ButtonRole";
import ButtonStartRoleGame from "../Buttons/ButtonStartRoleGame";

export default function ScreenMafia() {
  return (
    <View style={styles.container}>
      <View >
        <ButtonGoBack/>
      </View>
      <View>
        <ButtonRole title={'MAFIA'}/>
        <ButtonRole title={'CIVILIAN'}/>
        <ButtonRole title={'DOCTOR'}/>
        <ButtonRole title={'SHERIFF'}/>
        <ButtonRole title={'MANIAC'}/>
        <ButtonRole title={'STREETWALKER'}/>
      </View>
      <View style={styles.start}>
        <ButtonStartRoleGame/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    paddingTop: 30,
  },
  start: {
    marginTop: 50,
    alignSelf: "center",
  }
})
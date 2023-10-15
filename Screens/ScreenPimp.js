import {StyleSheet, View} from "react-native";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonRole from "../Buttons/ButtonsRoles/ButtonRole";
import ButtonStartRoleGame from "../Buttons/ButtonStartRoleGame";

export default function ScreenPimp() {
  return (
    <View style={styles.container}>
      <View >
        <ButtonGoBack/>
      </View>
      <View>
        <ButtonRole title={'PIMP'}/>
        <ButtonRole title={'SHERIFF'}/>
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
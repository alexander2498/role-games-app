import {StyleSheet, View} from "react-native";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonRole from "../Buttons/ButtonsRoles/ButtonRole";
import ButtonStartSpy from "../Buttons/ButtonStartSpy";

export default function ScreenSpy() {
  return (
    <View style={styles.container}>
      <View>
        <ButtonGoBack/>
      </View>
      <View>
        <ButtonRole title={'SPY'}/>
        <ButtonRole title={'CIVILIAN'}/>
      </View>
      <View style={styles.start}>
        <ButtonStartSpy/>
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
});
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";
import {clearRoles} from "../Features/rolesSlice";
import {useNavigation} from "@react-navigation/native";

export default function ButtonGoBack() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function buttonBackPressed() {
    navigation.goBack();
    dispatch(clearRoles());
  }
  
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={buttonBackPressed}>
        <Text style={styles.text}>back</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 90,
    margin: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontStyle: "normal",
    fontSize: 18,
    color: '#fff',
  },
})
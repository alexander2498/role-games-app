import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteRole, pushRole} from "../../Features/rolesSlice";

export default function ButtonRole({title}) {
  const [counter, setCounter] = useState(0);
  const [checker, setChecker] = useState(true)
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {
          setCounter(prevState => prevState + 1);
          setChecker(false);
          dispatch(pushRole(title));
        }}>
          <Text>+</Text>
        </TouchableOpacity>
        <View style={styles.display}>
          <Text style={styles.text}>{counter}</Text>
          <Text style={styles.text}>{title}</Text>
        </View>
        <TouchableOpacity disabled={checker} style={styles.button} onPress={() => {
          setCounter(prevState => prevState - 1);
          if (counter === 1) {
            setChecker(true);
          }
          dispatch(deleteRole(title))
        }}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F5F5F5',
    height: 50,
    width: 50,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  display: {
    alignItems: "center",
  },
  text: {
    color: '#fff',
  }
})
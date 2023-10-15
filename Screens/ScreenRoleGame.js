import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import mixArr from "../Scripts/mixArr";
import {useEffect, useState} from "react";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import CompGameStarted from "../Components/CompGameStarted";

export default function ScreenRoleGame() {
  const [counter, setCounter] = useState(0);
  const [role, setRole] = useState(false);
  const [queue, setQueue] = useState([]);
  
  const roles = useSelector(state => state.roles.roles);
  
  useEffect(() => {
    setQueue(
      mixArr(roles)
    )
  }, []);
  
  const onRolePress = () => {
    if (role) {
      setCounter(prevState => prevState + 1);
      setRole(false);
    } else {
      setRole(true);
    }
  }
  
  if (counter === queue.length) {
    return (
      <CompGameStarted />
    )
  } else if (role) {
    return (
      <>
        <View style={styles.back} >
          <View>
            <ButtonGoBack/>
          </View>
          <View style={styles.container} >
            <TouchableOpacity style={styles.button} onPress={onRolePress}>
              <Text style={styles.text}>Your role is {queue[counter]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
  return (
    <>
      <View style={styles.back}>
        <View >
          <ButtonGoBack/>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={onRolePress}>
            <Text style={styles.text}>Tap to find out your role</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
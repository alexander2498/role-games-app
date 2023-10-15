import {StyleSheet, Text, TouchableOpacity} from "react-native";
export default function ButtonGame({title, onPress}) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 24,
  }
});
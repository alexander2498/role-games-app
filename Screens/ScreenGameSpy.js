import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import mixArr from "../Scripts/mixArr";
import {countries} from "../Sources/Sources";
import replaceElems from "../Scripts/replaceElems";
import CompSpyView from "../Components/CompSpyView";
import CompGameStarted from "../Components/CompGameStarted";

export default function ScreenGameSpy() {
  const [counter, setCounter] = useState(0);
  const [role, setRole] = useState(false);
  const [queue, setQueue] = useState([]);
  
  const roles = useSelector(state => state.roles.roles);
  
  useEffect(() => {
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    setQueue(
      mixArr(replaceElems(roles, 'CIVILIAN', randomCountry))
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
      <>
        <CompGameStarted />
      </>
    )
  } else if (role && queue[counter] === 'SPY') {
    return (
      <>
        <CompSpyView text={'You are the\n SPY'} onPress={onRolePress}/>
      </>
    )
  } else if (role) {
    return (
      <>
        <CompSpyView text={`The country is ${queue[counter]}`} onPress={onRolePress}/>
      </>
    )
  }
  return (
    <>
      <CompSpyView text={'Tap to find out your role'} onPress={onRolePress}/>
    </>
  )
}
import {createStackNavigator} from "@react-navigation/stack";
import ScreenStart from "../Screens/ScreenStart";
import ScreenMafia from "../Screens/ScreenMafia";
import ScreenRoleGame from "../Screens/ScreenRoleGame";
import ScreenPimp from "../Screens/ScreenPimp";
import ScreenSpy from "../Screens/ScreenSpy";
import ScreenGameSpy from "../Screens/ScreenGameSpy";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={'start'} component={ScreenStart}/>
      <Stack.Screen name={'mafia'} component={ScreenMafia}/>
      <Stack.Screen name={'spy'} component={ScreenSpy}/>
      <Stack.Screen name={'pimp'} component={ScreenPimp}/>
      <Stack.Screen name={'game'} component={ScreenRoleGame}/>
      <Stack.Screen name={'game_spy'} component={ScreenGameSpy}/>
    </Stack.Navigator>
  );
}
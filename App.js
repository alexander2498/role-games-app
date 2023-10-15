import {NavigationContainer} from "@react-navigation/native";
import StackNavigation from "./Stack/StackNavigation";
import {Provider} from "react-redux";
import store from "./Features/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigation/>
      </Provider>
    </NavigationContainer>
  );
}
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeNav } from "./assets/screens/App_HomeNav";
import { LoginNav } from "./assets/screens/App_LoginNav";
import { RegisterNav } from "./assets/screens/App_RegisterNav";
export default function App() { 
  const StackLaptops = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackLaptops.Navigator initialRouteName="Login_Nav">
        <StackLaptops.Screen component={HomeNav} name="Home_Nav" />
        <StackLaptops.Screen component={LoginNav} name="Login_Nav" />
        <StackLaptops.Screen component={RegisterNav} name="Register_Nav" />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeNav } from "./assets/screens/App_HomeNav";
import { LoginNav } from "./assets/screens/App_LoginNav";
import { RegisterNav } from "./assets/screens/App_RegisterNav";
export default function App() { 
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login_Nav">
        <Stack.Screen component={HomeNav} name="Home_Nav" options={{
          headerBackVisible : false,
          title: 'Inicio',
          headerTitleAlign: 'center'
        }}/>
        <Stack.Screen component={LoginNav} name="Login_Nav" options={{
          headerBackVisible : false,
          title: 'Iniciar Sesión',
          headerTitleAlign: 'center'
        }}/>
        <Stack.Screen component={RegisterNav} name="Register_Nav" options={{
          headerBackVisible : false,
          title: 'Crear cuenta nueva',
          headerTitleAlign: 'center'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
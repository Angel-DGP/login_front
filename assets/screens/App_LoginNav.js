import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import { loginUser } from "../../rest_client/rest";

export const LoginNav = ({ navigation, route }) => {
  const [name, onChangeName] = useState("");
  const [password, onChangePassword] = useState("");

 const onLoginPress = async () => {
  const user = await loginUser(name, password);

  if (user && user.name_user) {
    console.log("Login exitoso:", user);
    navigation.navigate("Home_Nav");
  } else {
    console.log("Datos no registrados");
    console.log(name);
    console.log(password);
  }
};


  return (
    <View>
      <Text>Login screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Ingrese su usuario"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Ingrese su contraseña"
        secureTextEntry
      />
      <Button title="Ingresar" onPress={()=>{onLoginPress()}} />
      <Button title="No posees cuenta?" onPress={()=>{navigation.navigate('Register_Nav')}} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

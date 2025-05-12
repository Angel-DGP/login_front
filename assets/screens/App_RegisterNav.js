import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert, TextInput } from "react-native";
import { Button } from "react-native-web";
import { insertUser } from "../../rest_client/rest";
export const RegisterNav = ({ navigation, route }) => {
  const handleRegister = async () => {
  const result = await insertUser(name, password, email);
  if (result) {
    Alert.alert("Registro exitoso", `Usuario creado: ${result.name_user}`);
  } else {
    Alert.alert("Error", "No se pudo registrar el usuario.");
  }
};
    const [name, onChangeName] = useState("");
    const [password, onChangePassword] = useState("");
    const [email, onChangeEmail] = useState("");
    const exists = async () =>{
      const users = await getAllUsers();
          console.log("Usuarios obtenidos:", users);
          const matchedUser = users.find(
            (user) => user.name_user === name && user.password_user === password
          );
    }
  return (
    <View>
      <Text>Register screen</Text>
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
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Ingrese su correo electronico"
            />
            <Button title="Registrarse" onPress={handleRegister}/>
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

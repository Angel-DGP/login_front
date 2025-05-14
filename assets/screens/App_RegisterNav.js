import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
} from "react-native";
import { Button } from "react-native-web";
import { existingUser, insertUser } from "../../rest_client/rest";
export const RegisterNav = ({ navigation, route }) => {
  const handleRegister = async () => {
    const response = await existingUser(email, name);
    if (response.exists == false) {
      const result = await insertUser(name, password, email);
      if (result) {
        Alert.alert("Registro exitoso", `Usuario creado: ${result.name_user}`);
        navigation.replace("Login_Nav");
      } else {
        Alert.alert("Error", "No se pudo registrar el usuario.");
      }
    } else {
      console.log("ya existe este usuario con ese correo electronico");
    }
  };
  const [name, onChangeName] = useState("");
  const [password, onChangePassword] = useState("");
  const [email, onChangeEmail] = useState("");
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
      <Button
        title="Iniciar Sesión"
        onPress={() => {
          navigation.replace("Login_Nav");
        }}
      />
      <Button title="Registrarse" onPress={handleRegister} />
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

import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { Button } from "react-native-web";
export const HomeNav = ({ navigation, route }) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button title="Regresar" onPress={()=>{navigation.goBack()}}/>
    </View>
  );
};

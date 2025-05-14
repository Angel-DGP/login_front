import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { loginUser } from "../../rest_client/rest";
import {
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CRow,
  CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export const LoginNav = ({ navigation }) => {
  const [name, onChangeName] = useState("");
  const [password, onChangePassword] = useState("");
  const [errorLabel, onChangeErrorLabel] = useState("");

  const onLoginPress = async () => {
    onChangeErrorLabel("");
    if (name && password) {
      const user = await loginUser(name, password);
      if (user && user.name_user) {
        console.log("Login exitoso:", user);
        navigation.replace("Home_Nav");
      } else {
        onChangeErrorLabel("Estos datos no existen");
        console.log("Datos no registrados");
        console.log(name);
        console.log(password);
      }
      s;
    } else {
      onChangeErrorLabel("Faltan campos por rellenar");
    }
  };
  return (
    <CContainer >
      <CCol className="align-items-center">
        <CRow>
          <CFormInput
            type="text"
            placeholder="User"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
            label="Ingrese su usuario"
          />
          <CFormInput
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => onChangePassword(e.target.value)}
            label="Ingrese su contraseña"
          />
        </CRow>
        <CRow className="align-items-center">
          <CFormLabel>{errorLabel}</CFormLabel>
          <CButton onClick={onLoginPress} color="primary" className="rounded-pill">
            Ingresar
          </CButton>
          <CButton
            onClick={() => {
              navigation.replace("Register_Nav");
            }}
            color="link"
          >
            ¿No tienes cuenta? Crea una
          </CButton>
        </CRow>
      </CCol>
    </CContainer>
  );
};

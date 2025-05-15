import { useState } from "react";
import {
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CRow,
  CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
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
    <CContainer
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop:40
      }}
    >
      <CCol className="align-items-center">
        <CFormInput
          onChange={(e) => onChangeName(e.target.value)}
          value={name}
          label="Ingrese su usuario"
          placeholder="User"
        />

        <CFormInput
          onChange={(e) => onChangePassword(e.target.value)}
          value={password}
          label="Ingrese su contraseña"
          type="password"
          placeholder="Password"
        />
        <CFormInput
          onChange={(e) => onChangeEmail(e.target.value)}
          value={email}
          label="Ingrese su correo electronico"
          placeholder="Email"
        />
        <CRow style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20 }}>
          {" "}
          <CButton
            onClick={handleRegister}
            color="primary"
            className="rounded-pill"
          >
            {" "}
            Registrarse
          </CButton>
          <CButton
            title="Iniciar Sesión"
            onClick={() => {
              navigation.replace("Login_Nav");
            }}
            color="link"
          >
            ¿Posees cuenta? Ingresa aquí
          </CButton>
        </CRow>
      </CCol>
    </CContainer>
  );
};

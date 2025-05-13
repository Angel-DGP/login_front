const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getAllUsers = async () => {
  console.log("getUserById");
  try {
    const response = await fetch(API_URL + "getUserById");
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return [];
  }
};

export const insertUser = async (name_user, password_user, email_user) => {
  try {
    const response = await fetch(API_URL + "postUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name_user,
        password_user,
        email_user,
      }),
    });
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error al insertar usuario:", error);
    return null;
  }
};

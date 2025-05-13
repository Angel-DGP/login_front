//const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_URL = 'http://localhost:3001/'
export const loginUser = async (name_user, password_user) => {
  try {
    const response = await fetch(`${API_URL}getUserById`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name_user,
        password_user,
      }),
    });

    const text = await response.text();
    console.log("Texto del servidor:", text);

    const body = JSON.parse(text);
    return body;
  } catch (error) {
    console.error("Error al hacer login:", error);
    return null;
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

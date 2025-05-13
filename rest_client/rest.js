const url = `https://login-back-ixl9.onrender.com/`;

export const getAllUsers = async () => {
  console.log("getAllUsers");
  try {
    const response = await fetch(url + "users");
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
};

export const insertUser = async (name_user, password_user, email_user) => {
  try {
    const response = await fetch(url + "postUser", {
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

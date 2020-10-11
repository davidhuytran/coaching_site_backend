import axios from "axios";

export async function handleLogin(data) {
  console.log(data);
  const response = await axios.post("/auth/login", {
    email: data.email,
    password: data.password,
  });
  return response;
}

export async function handleSignup(data) {
  console.log(data);
  const response = await axios.post("/auth/signup", {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
  });
  return response;
}

export async function handleMail(data) {
  console.log(data);
  const response = await axios.post("/mail/sendMail", {
    firstName: data.firstName,
    lastName: data.lastName,
    to: data.email,
    subject: "Contact",
    text: data.message,
  });
  return response;
}

export async function checkLogin() {
  const response = await axios.get("/auth/user");
  if (response.data) {
    return response;
  }
}

export async function checkRank() {
  const { data } = await axios.get("/league/stats");
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].queueType == "RANKED_SOLO_5x5") {
        return data[i];
      }
    }
  }
}

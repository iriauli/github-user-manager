import axios from "axios";

const API_URL = "https://api.github.com";
const ACCESS_TOKEN = "PASTE_YOUR_TOKEN_HERE";

async function FetchIndividualUser(login) {
  try {
    const response = await axios.get(`${API_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export { FetchIndividualUser };

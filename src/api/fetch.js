import axios from "axios";

const API_URL = process.env.REACT_APP_GITHUB_API;
const ACCESS_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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

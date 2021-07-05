import axios from "axios";

const ACCESS_TOKEN = "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";
const EACH_USER = "https://api.github.com/users/";

async function FetchIndividualUser(login) {
    const response = await axios.get(`${EACH_USER}${login}`, {
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
}

export { FetchIndividualUser };

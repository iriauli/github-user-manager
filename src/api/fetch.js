import axios from "axios";

// const ACCESS_TOKEN = "YOUR_TOKEN";
const EACH_USER = "https://api.github.com/users/";

async function FetchIndividualUser(login) {
    const response = await axios.get(`${EACH_USER}${login}`, {
      // headers: {
      //   Authorization: `token ${ACCESS_TOKEN}`,
      // },
    });
    return response.data;
}

export { FetchIndividualUser };

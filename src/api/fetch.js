import axios from "axios";

const access_token = "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";

const EACH_USER = "https://api.github.com/users/";

async function FetchIndividualUser(login) {
  try {
    const response = await axios.get(`${EACH_USER}${login}`, {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("");
  }
}

async function FetchRepositories(username) {
  const response = await axios.get(
    `${EACH_USER}${username}/repos?per_page=10`,
    {
      headers: {
        Authorization: `token ${access_token}`,
      },
    }
  );

  return response.data;
}

export { FetchIndividualUser, FetchRepositories };

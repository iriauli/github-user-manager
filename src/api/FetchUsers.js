import axios from "axios";

const access_token = "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";

// async function FetchUsers(number) {
//   try {
//     const response = await axios.get(
//       `https://api.github.com/search/users?q=followers:%3E=1000&per_page=${number}`,
//       {
//         headers: {
//           Authorization: `token ${access_token}`,
//         },
//       }
//     );
//     return response.data.items;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

const EACH_USER = "https://api.github.com/users/";

async function FetchEachUser(login) {
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

// async function FetchOrgs(username) {
//   const response = await axios.get(`${EACH_USER}${username}/orgs?per_page=3`, {
//     headers: {
//       Authorization: `token ${access_token}`,
//     },
//   });

//   return response.data;
// }

// async function FetchRepos(username) {
//   const response = await axios.get(
//     `${EACH_USER}${username}/repos?per_page=10`,
//     {
//       headers: {
//         Authorization: `token ${access_token}`,
//       },
//     }
//   );

//   return response.data;
// }

export { FetchEachUser };
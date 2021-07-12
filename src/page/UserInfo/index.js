import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import Styles from "./UserInfo.module.css";
import Header from "../../components/Header";
import AddToFavorites from "../../components/AddToFavorites";
import Loader from "../../components/Loader";

function UserInfo() {
  const location = useLocation();
  const [info, setInfo] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [organization, setOrganization] = useState([]);

  const [loading, setLoading] = useState({});
  const [error, setError] = useState("");

  // Format Numbers
  const formatter = new Intl.NumberFormat("en", {
    style: "decimal",
    useGrouping: true,
    notation: "compact",
  });

  // API URL & ACCESS TOKEN
  const API_URL = `https://api.github.com${location.pathname}`;
  const ACCESS_TOKEN = "PASTE_YOUR_TOKEN_HERE";

  // Fetch User Info
  async function Information() {
    try {
      const response = await fetch(`${API_URL}`, {
        headers: {
          Authorization: `token ${ACCESS_TOKEN}`,
        },
      });
      const info = await response.json();
      return info;
    } catch (error) {
      throw new Error("");
    }
  }

  useEffect(() => {
    Information()
      .then((info) => {
        setInfo(info);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Fetch Top Repositories
  async function Repositories() {
    try {
      const response = await fetch(`${API_URL}/repos?per_page=10`, {
        headers: {
          Authorization: `token ${ACCESS_TOKEN}`,
        },
      });
      const repos = await response.json();
      return repos;
    } catch (error) {
      throw new Error("");
    }
  }

  useEffect(() => {
    Repositories()
      .then((repos) => {
        setRepositories(repos);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Fetch Top Organisations
  async function Organizations() {
    try {
      const response = await fetch(`${API_URL}/orgs?per_page=3`, {
        headers: {
          Authorization: `token ${ACCESS_TOKEN}`,
        },
      });
      const orgs = await response.json();
      return orgs;
    } catch (error) {
      throw new Error("");
    }
  }

  useEffect(() => {
    Organizations()
      .then((orgs) => {
        setOrganization(orgs);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <div className={Styles.UserInfo}>
        {error ? (
          <p>User Not Found!</p>
        ) : (
          <>
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className={Styles.LeftBox}>
                  <img src={info.avatar_url} alt="avatar" />
                  <h1>{info.name}</h1>
                  <h3>{info.login}</h3>

                  <AddToFavorites />

                  <div className={Styles.Followers}>
                    <h4>{formatter.format(info.followers)} followers </h4>
                    <h4>{info.following} following</h4>
                  </div>

                  <div className={Styles.Orgs}>
                    {organization.map((orgs) => (
                      <div key={orgs.id}>
                        <a
                          href={`https://github.com/${orgs.login}`}
                          target="blank"
                        >
                          <img src={orgs.avatar_url} alt="organisation" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={Styles.RigthBox}>
                  <div className={Styles.Bio}>
                    <h3>{info.bio}</h3>
                  </div>

                  <div className={Styles.Repos}>
                    <h1>Top Repositories:</h1>

                    {repositories.map((repos) => (
                      <div key={repos.id}>
                        <a href={repos.html_url} target="blank">
                          <h3>{repos.name}</h3>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default UserInfo;

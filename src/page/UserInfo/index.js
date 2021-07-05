/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Styles from "./UserInfo.module.css";
import Header from "../../components/Header";
import AddToFavorites from "../../components/AddToFavorites";

const ACCESS_TOKEN = "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";

function UserInfo() {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [organization, setOrganization] = useState([]);

  const formatter = new Intl.NumberFormat("en", {
    style: "decimal",
    useGrouping: true,
    notation: "compact",
  });

  const fetchUrl = `https://api.github.com${location.pathname}`;

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);

  async function Repositories() {
    try {
      const response = await fetch(`${fetchUrl}/repos?per_page=10`, {
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
    Repositories().then((repos) => {
      setRepositories(repos);
    });
  }, []);

  async function Organizations() {
    try {
      const response = await fetch(`${fetchUrl}/orgs?per_page=3`, {
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
    Organizations().then((orgs) => {
      setOrganization(orgs);
    });
  }, []);

  return (
    <>
      <Header />
      <div className={Styles.UserInfo}>
        <div className={Styles.LeftBox}>
          <img src={userInfo.avatar_url} alt="avatar" />
          <h1>{userInfo.name}</h1>
          <h3>{userInfo.login}</h3>

          <AddToFavorites />
          <div className={Styles.Followers}>
            <h4>{formatter.format(userInfo.followers)} followers </h4>
            <h4>{userInfo.following} following</h4>
          </div>

          <div className={Styles.Orgs}>
            {organization.map((orgs) => (
              <div key={orgs.id}>
                <a href={`https://github.com/${orgs.login}`} target="blank">
                  <img src={orgs.avatar_url} alt="organisation" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.RigthBox}>
          <div className={Styles.Bio}>
            <h3>{userInfo.bio}</h3>
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
      </div>
    </>
  );
}

export default UserInfo;

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styles from "./UserInfo.module.css";
import Header from "../../components/Header";

function UserInfo() {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState([]);
  const [repositories, setRepositories] = useState([]);
  // const [organization, setOrganization] = ([]);

  const fetchUrl = `https://api.github.com${location.pathname}`;

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);

  // მოგვაქვს ინფორმაცია რეპოზიტორიებზე
  // რეპოზიტორიების ველში იბეჭდება პირველი 30 რეპოზიტორია
  async function Repositories() {
    const response = await fetch(`${fetchUrl}/repos`);
    const repos = await response.json();
    return repos;
  }

  useEffect(() => {
    Repositories().then((repos) => {
      setRepositories(repos);
    });
  }, []);

  // მოგვაქვს ინფორმაცია ორგანიზაციებზე
  // კონსოლში იბეჭდება მასივი, ორმელშიც არის პირველი 3 ორგანიზაცია
  async function Organizations() {
    const response = await fetch(`${fetchUrl}/orgs`);
    const orgs = await response.json();
    return orgs;
  }

  useEffect(() => {
    Organizations().then((orgs) => {
      console.log([orgs[0], orgs[1], orgs[2]]);
    });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.UserInfo}>
        <div className={styles.LeftBox}>
          <img src={userInfo.avatar_url} alt="avatar" />
          <h1>{userInfo.name}</h1>
          <h3>{userInfo.login}</h3>

          <button>Add to Favorites</button>
          <div className={styles.Followers}>
            <h4>{userInfo.followers} followers </h4>
            <h4>{userInfo.following} following</h4>
          </div>

          <div className={styles.Orgs}>{/* <h1>{orgNames.id}</h1> */}</div>
        </div>

        <div className={styles.RigthBox}>
          <div className={styles.Bio}>
            <h3>{userInfo.bio}</h3>
          </div>

          <div className={styles.Repos}>
            <h1>Repositories:</h1>
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

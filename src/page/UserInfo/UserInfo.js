/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import styles from "./UserInfo.module.css";
import Header from "../../components/Header";
import ToggleFavorite from "../../components/ToggleFavorite";

function UserInfo() {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [organization, setOrganization] = useState([]);

  const formatter = new Intl.NumberFormat('en', {
    style: 'decimal',
    useGrouping: true,
    notation: 'compact'
});

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
    const response = await fetch(`${fetchUrl}/repos?per_page=10`);
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
    const response = await fetch(`${fetchUrl}/orgs?per_page=3`);
    const orgs = await response.json();
    return orgs;
  }

  useEffect(() => {
    Organizations().then((orgs) => {
      setOrganization(orgs);
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

<ToggleFavorite />
          <div className={styles.Followers}>
            <h4>{formatter.format(userInfo.followers)} followers </h4>
            <h4>{userInfo.following} following</h4>
          </div>

          <div className={styles.Orgs}>
          {organization.map((orgs) => (
              <div key={orgs.id}>
                <a href={`https://github.com/${orgs.login}`} target="blank">
                  <img src={orgs.avatar_url} alt="organ" />
                 </a>
              </div>
            ))}

          </div>
        </div>

        <div className={styles.RigthBox}>
          <div className={styles.Bio}>
            <h3>{userInfo.bio}</h3>
          </div>

          <div className={styles.Repos}>
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

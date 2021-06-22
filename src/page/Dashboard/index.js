import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import Header from "../../components/Header";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUrl = `https://api.github.com/search/users?q=followers:>=1000&per_page=${
      page * 20
    }`;

    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.items);
      });
  }, [page]);

  return (
    <React.Fragment>
      <Header />

      <div className={styles.Dashboard}>
        {users.map((user) => (
          <div key={user.id} className={styles.UserCard}>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt="avatar" />
            <p>{user.followers}</p>
            <p>Followers:</p>
            <p>Following:</p>
            <div className={styles.CardBot}>
              <Link to={`/users/${user.login}`}>
                <button className={styles.SeeMore}>
                  <span>See More</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.LoadMore}>
        <button
          className={styles.LoadMoreButton}
          onClick={() => setPage(page + 1)}
        >
          Load More
        </button>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;

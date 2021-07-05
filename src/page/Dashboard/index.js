import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Header from "../../components/Header";
import Card from "../../components/Card";

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
          <Card key={user.id} user={user} />
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

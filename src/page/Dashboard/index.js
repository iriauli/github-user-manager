import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUrl = `https://api.github.com/search/users?q=followers:>=1000&per_page=${
      page * 20
    }`;

    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.items);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <React.Fragment>
      <Header />

      {error ? (
        <p>Data Not Found!</p>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </React.Fragment>
  );
}

export default Dashboard;

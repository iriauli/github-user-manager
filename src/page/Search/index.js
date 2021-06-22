import { useState } from "react";
import SearchCard from "../../components/SearchCard/";
import Styles from "./Search.module.css";
import Header from "../../components/Header";

function Search() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    if (profileJson) {
      setData(profileJson);
    }
  };

  return (
    <>
      <Header />
      <div className={Styles.Search}>
        <div className={Styles.Form}>
          <h1>Search by account name</h1>

          <input
            placeholder="Search username here..."
            type="text"
            value={username}
            onChange={onChangeHandler}
          />

          <button
            className={Styles.SearchButton}
            type="submit"
            onClick={submitHandler}
          >
            Search
          </button>
          <div className={Styles.UserCard}>
            <SearchCard data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;

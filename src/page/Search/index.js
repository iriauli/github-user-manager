import React, { useState } from "react";
import { FetchIndividualUser } from "../../api/fetch";
import SearchCard from "../../components/SearchCard";
import Styles from "./Search.module.css";
import Header from "../../components/Header";

function Search() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState([]);

  function handleClick() {
    FetchIndividualUser(name).then((data) => setInfo([data]));
  }

  return (
    <>
      <Header />
      <div className={Styles.Search}>
        <div className={Styles.Form}>
          <h1>Search by account name</h1>

          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className={Styles.SearchButton} onClick={handleClick}>
              Search
            </button>
            {info.length !== 0 ? (
              <h1>
                {info.map((item) => (
                  <SearchCard key={item.id} item={item} />
                ))}
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;

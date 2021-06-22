import { Link } from "react-router-dom";
import Styles from "./SearchCard.module.css";

const SearchCard = ({ data }) => {
  return (
    <div className={Styles.UserCard}>
      <h3>{data.login}</h3>

      {!data.avatar_url ? (
        " "
      ) : (
        <img className="asdasd" src={data.avatar_url} alt="avatar" />
      )}

      <p>{data.location}</p>
      <p>{data.bio}</p>

      <div className={Styles.CardBot}>
        <Link to={`/users/${data.login}`}>
          <button className={Styles.SeeMore}>
            <span>See More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchCard;

import Styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={Styles.Loader}>
      <div className={Styles.Loading}></div>
    </div>
  );
};

export default Loader;

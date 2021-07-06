import Styles from "../NotFound/NotFound.module.css";

function index() {
    return (
        <div className={Styles.NotFound}>
            <div className={Styles.Inside}>
            <h1>404</h1>
            <h2>Page not found</h2>
            </div>
        </div>
    )
}

export default index

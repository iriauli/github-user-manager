import { parseToken } from "../../utils/jwt";
import { authInitialized } from "./actions";

function initializeAuthEffect(dispatch) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const { valid, payload } = parseToken(accessToken);

    if (accessToken && valid) {
      dispatch(authInitialized(true, payload));
    } else {
      dispatch(authInitialized(false, null));
    }
  } catch {
    dispatch(authInitialized(false, null));
  }
}

export { initializeAuthEffect };

import jwtDecode from "jwt-decode";

function toggleSession(accessToken) {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
  } else {
    localStorage.removeItem("accessToken");
  }
}

function parseToken(accessToken) {
  if (!accessToken) {
    return { valid: false, payload: null };
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return { valid: decoded.exp > currentTime, payload: decoded.payload };
}

export { toggleSession, parseToken };

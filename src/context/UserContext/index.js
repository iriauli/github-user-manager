import { createContext, useState } from "react";

const useInfo = createContext();

function UseCotnextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    url: "",
    followings: "",
    followers: "",
  });

  const [favorites, setFavorites] = useState([]);

  return (
    <useInfo.Provider
      value={{ userInfo, setUserInfo, favorites, setFavorites }}
    >
      {children}
    </useInfo.Provider>
  );
}

export { UseCotnextProvider, useInfo };
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [coinId, setCoinId] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );
  const [coinInfo, setCoinInfo] = useState([]);

  const handleOnWatchlist = (id) => {
    if (coinId.includes(id)) {
      if (coinId.length == 1) {
        setCoinId([]);
        setCoinInfo([]);
        localStorage.setItem("watchList", JSON.stringify([]));
      }
      const updatedCoin = coinId.filter((coinid) => coinid != id);
      setCoinId(updatedCoin);
    }
    const coinid = [...coinId];

    if (!coinid.includes(id)) {
      setCoinId([...coinid, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(coinId));
  }, [coinId]);

  return (
    <WatchlistContext.Provider
      value={{ coinId, setCoinId, handleOnWatchlist, coinInfo, setCoinInfo }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContext;

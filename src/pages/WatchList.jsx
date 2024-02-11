/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import { useContext } from "react";
import WatchlistContext from "../context/WatchlistContext";
import TabsComponents from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";
import Loader from "../components/Common/Loader";


function WatchList() {
  const { coinId, setCoinId, coinInfo, setCoinInfo } =
    useContext(WatchlistContext);

  const getCoinData = async () => {
    if (coinId.length > 0) {
      const data = await get100Coins();
      const selectedCoinData = [];
      for (let id of coinId) {
        const selectedCoin = data?.filter((coin) => coin.id == id);
        if (selectedCoin) {
          selectedCoinData.push(selectedCoin[0]);
        }
      }
      setCoinInfo(selectedCoinData);
    }
  };

  useEffect(() => {
    getCoinData();
  }, [coinId]);

  return (
    <div className="watchlist-container">
      <Header />
      {!coinId ? (
        <Loader />
      ) : (
        <div>
          <TabsComponents coins={coinInfo} />
        </div>
      )}
      <div className="empty-watchlist">
      {!coinInfo.length > 0 && <h3>Watchlist is Empty. Go to Dashboard</h3>}
      </div>
     
    </div>
  );
}

export default WatchList;

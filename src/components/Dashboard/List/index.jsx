/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import "./styles.css";
import { Link } from "react-router-dom";
function List({ coin }) {
  

  


  return (
    <Link to={`/coin/${coin.id}`}>
      {coin != undefined && coin != null ? (
        <>
        
          <div className="list-container">
            <Tooltip title="coin img" placement="bottom">
              <img src={coin.image} alt={coin.name} className="coin-logo" />
            </Tooltip>

            <div className="symbol-name">
              <Tooltip title="coin symbol" placement="bottom">
                <h2 className="coin-symbol">{coin.symbol}</h2>
              </Tooltip>

              <Tooltip title="coin name" placement="bottom">
                <p className="coin-name">{coin.name}</p>
              </Tooltip>

            </div>
            <div className="coin-trending">
              {coin.price_change_percentage_24h > 0 ? (
                <div className="trending-up">
                  <div className="trending-green">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                  <TrendingUpRoundedIcon className="trending-icon-green" />
                </div>
              ) : (
                <div className="trending-down">
                  <div className="trending-red">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                  <TrendingDownRoundedIcon className="trending-icon-red" />
                </div>
              )}
            </div>

            <div className="coin-info">

              <Tooltip title="current price" placement="bottom">
                <h4 className="current-price">
                  ${coin.current_price.toLocaleString()}
                </h4>
              </Tooltip>

              <Tooltip title="total volume" placement="bottom">
                <p className="total-volume" >
                  ${coin.total_volume.toLocaleString()}
                </p>
              </Tooltip>

              <Tooltip title="market cap" placement="bottom">
                <p className="market-cap" >
                  ${coin.market_cap.toLocaleString()}
                </p>
              </Tooltip>

            </div>
         
          </div>
        </>
      ) : (
        <div className="something-wrong">
          <h1>Something is Wrong... Please Try Again Later</h1>
        </div>
      )}
    </Link>
  );
}

export default List;

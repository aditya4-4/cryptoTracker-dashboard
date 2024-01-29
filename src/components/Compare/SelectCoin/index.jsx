/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { get100Coins } from "../../../functions/get100Coins";
import "./styles.css";

function SelectCoin({ crypto1, crypto2, handleOnCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "var(--blue)",
      },
    },
  };

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setAllCoins(myCoins);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        sx={style}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleOnCoinChange(event, false)}
      >
        {allCoins
          ?.filter((item) => item.id != crypto2)
          .map((coin, id) => (
            <MenuItem key={id} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        sx={style}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleOnCoinChange(event, true)}
      >
        {allCoins
          ?.filter((item) => item.id != crypto1)
          .map((coin, id) => (
            <MenuItem key={id} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectCoin;

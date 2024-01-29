/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Header from "../components/Common/Header/";
import SelectCoin from "../components/Compare/SelectCoin";
import SelectDays from "../components/Coin/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";
import { coinObject } from "../functions/coinObject";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import LineChart from "../components/Coin/LineChart";
import CoinInfo from "../components/Coin/CoinInfo";
import PriceToggle from "../components/Coin/priceToggle";
import Footer from "../components/Common/Footer";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  // ----------------------------------first time render-----

  //
  const getData = async () => {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    if (data1) {
      coinObject(setCrypto1Data, data1);
      const data2 = await getCoinData(crypto2);
      if (data2) {
        coinObject(setCrypto2Data, data2);

        const prices1 = await getCoinPrices(crypto1, days, priceType);

        const prices2 = await getCoinPrices(crypto2, days, priceType);

        if (prices1 && prices2) {
          settingChartData(setChartData, prices1, prices2);
        }
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  // >>>>>>>>>>>>>>>>>>>first time render >>>>>>>end>>>>>>>>

  // function invoked on days changed----start----
  const handleOnDaysChange = async (event) => {
    const newDays = event.target.value;
    setIsLoading(true);
    setDays(newDays);
    const prices1 = await getCoinPrices(crypto1, newDays, priceType);
    if (prices1) {
      const prices2 = await getCoinPrices(crypto2, newDays, priceType);
      if (prices1 && prices2) {
        settingChartData(setChartData, prices1, prices2);
      }
    }
    setIsLoading(false);
  };
  // >>>>>>>>>>>>>>>>function invoked on days changed>>>>end>>>>>

  // function invoked crypto coin is changed----start----
  const handleOnCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data2 = await getCoinData(event.target.value);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        if (prices1 && prices2) {
          settingChartData(setChartData, prices1, prices2);
        }
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(setCrypto1Data, data);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        if (prices1 && prices2) {
          settingChartData(setChartData, prices1, prices2);
        }
      }
    }
    setIsLoading(false);
  };
  // >>>>>>>>>>function invoked crypto coin is changed>>>>end>>>>
  // ------------------
  const handleOnPriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    if (prices1) {
      const prices2 = await getCoinPrices(crypto2, days, newType);
      if (prices1 && prices2) {
        settingChartData(setChartData, prices1, prices2);
      }
    }
    setIsLoading(false);
  };
  // -----------------

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
            <SelectCoin
              crypto1={crypto1}
              crypto2={crypto2}
              handleOnCoinChange={handleOnCoinChange}
            />
            <SelectDays days={days} handleOnDaysChange={handleOnDaysChange} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper">
            <div className="toggle-prices" style={{ paddingTop: "0.8rem" }}>
              <PriceToggle
                priceType={priceType}
                handleOnPriceTypeChange={handleOnPriceTypeChange}
              />
            </div>

            <LineChart
              chartData={chartData}
              priceType={"prices"}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default ComparePage;

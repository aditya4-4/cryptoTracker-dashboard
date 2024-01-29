import { useState, useEffect } from "react";
import Header from "../components/Common/Header";
import TabsComponents from "../components/Dashboard/Tabs";
import Footer from "../components/Common/Footer"
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";

function DashBoard() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const handleOnPageChange = (event, value) => {
    setPageNumber(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  }
  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponents coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleOnPageChange={handleOnPageChange}
            />
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default DashBoard;

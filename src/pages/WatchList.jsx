import Header from "../components/Common/Header";

function WatchList() {
  return (
    <div className="watchlist-container">
      <Header />
      <div className="empty-watchlist">
        <h1>WatchList is Empty. Go to DashBoard</h1>
      </div>
    </div>
  );
}

export default WatchList;

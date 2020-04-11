import React from "react";
import "./styles.css";
import Lists from "./Lists";
export default function App() {
  return (
    <div className="App">
      <p style={{ color: "red" }}>
        Note:Not able to fetch data over http as url
        is:-http://starlord.hackerearth.com/TopSellingGames..... so copeid the
        data to firebase database and retrieving from there only URL is
        https://demoapp-12772.firebaseio.com/hackerearth.json
      </p>
      <Lists />
    </div>
  );
}

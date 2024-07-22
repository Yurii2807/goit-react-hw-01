import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./components/datafile/userdata.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/datafile/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/datafile/transactions.json";

function App() {
  return (
    <section>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </section>
  );
}
export default App;
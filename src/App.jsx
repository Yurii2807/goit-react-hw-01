import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "../friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
import Section from "./components/Section/Section";

function App() {
  return (
    <Section title={null}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Section>
  );
}
export default App;
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import userData from "../data/userData.json";
import friendsData from "../data/friends.json";
import transactions from "../data/transactions.json";

import clsx from "clsx";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={clsx(css["main-profile-section"], css["container"])}>
      <Profile userStats={userData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

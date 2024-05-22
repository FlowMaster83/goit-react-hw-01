import Profile from "./Profile";
import FriendList from "./FriendList";
import TransactionHistory from "./Transactions";
import userData from "./data/userData.json";
import friendsData from "./data/friends.json";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <>
      <Profile userStats={userData} />

      {/* Profile() {
     userStats: "UserData",
 } */}

      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
}

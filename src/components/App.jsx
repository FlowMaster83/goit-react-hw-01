import Profile from "./Profile";
import FriendList from "./FriendList";
import userData from "./data/userData.json";
import friendsData from "./data/friends.json";

export default function App() {
  return (
    <>
      <Profile userStats={userData} />

      {/* Profile() {
     userStats: "UserData",
 } */}
 
      <FriendList friends={friendsData} />
    </>
  );
}

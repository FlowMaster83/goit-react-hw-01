import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css["friends-list"]}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem friendItem={friend} />
          </li>
        );
      })}
    </ul>
  );
}

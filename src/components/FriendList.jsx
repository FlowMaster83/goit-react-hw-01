import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
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
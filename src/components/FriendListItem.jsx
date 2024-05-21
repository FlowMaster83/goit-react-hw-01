export default function FriendListItem({ friend: { avatar } }) {
  return (
    <div>
      <p>{avatar}</p>
      <p>name</p>
      <p>isOnline && isOffline</p>
    </div>
  );
}

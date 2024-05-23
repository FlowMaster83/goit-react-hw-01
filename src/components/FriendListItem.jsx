export default function FriendListItem({
  friendItem: { avatar, name, isOnline },
}) {
  return (
    <div>
      <img src={avatar} alt="Avatar" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

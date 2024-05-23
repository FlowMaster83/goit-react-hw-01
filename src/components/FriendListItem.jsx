export default function FriendListItem({
  friendItem: { avatar, name, isOnline },
}) {
  return (
    <div>
      <img src={avatar} alt="Avatar" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut eius veniam quibusdam iste molestias ad sunt quam porro. Aperiam aliquid dolorum natus dignissimos consectetur voluptatum aut atque sapiente facere.</p>
    </div>
  );
}

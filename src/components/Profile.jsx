export default function Profile({
    userStats: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <>
      <img src={avatar} alt="user avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>

      <ul>
        <li>
          <span>Followers: </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{likes}</span>
        </li>
      </ul>
    </>
  );
}

import css from "./Profile.module.css";

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
    <div className={css["user-card"]}>
      <img className={css["user-image"]} src={avatar} alt="user avatar" />
      <p className={css["user-name"]}>{username}</p>
      <p className={css["user-nickname"]}>@{tag}</p>
      <p className={css["user-location"]}>{location}</p>

      <ul className={css["user-stat-list"]}>
        <li className={css["user-stat-item"]}>
          <span className={css["user-stat-detail"]}>Followers: </span>
          <span>{followers}</span>
        </li>
        <li className={css["user-stat-item"]}>
          <span className={css["user-stat-detail"]}>Views: </span>
          <span>{views}</span>
        </li>
        <li className={css["user-stat-item"]}>
          <span className={css["user-stat-detail"]}>Likes: </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

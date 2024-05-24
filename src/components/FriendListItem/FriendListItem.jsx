import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friendItem: { avatar, name, isOnline },
}) {
  return (
    <div>
      <img className={css["friend-image"]} src={avatar} alt="Avatar" />
      <p className={css["friend-name"]}>{name}</p>
      <p
        className={clsx(
          css["friend-status"],
          isOnline ? css["Online"] : css["Offline"]
        )}
      ></p>
    </div>
  );
}

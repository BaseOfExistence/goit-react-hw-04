import css from "./FriendListItem.module.css"
import clsx from "clsx"
export default function FriendListItem({ avatar, name, isOnline }) {
    const status = clsx(isOnline ? css.online : css.offline);
    return (
        <div className={css.item}>
            <img
                src={avatar}
                alt="Avatar"
                width="112"
            />
            <p className={css.name}>{name}</p>
            <p className={status}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}
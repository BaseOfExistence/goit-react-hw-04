import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map(friend => {
                const { avatar, name, isOnline, id} = friend
                return (
                    <li key={id}>
                        <FriendListItem
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
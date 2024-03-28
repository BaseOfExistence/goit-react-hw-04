import clsx from "clsx"
import css from "./Profile.module.css"
export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    const classes = clsx(css.item, css.centerItem);
    return (
        <div className={css.container}>
            <div>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{name}</p>
                <p className={css.text}>{tag}</p>
                <p className={css.text}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.itemText}>Followers</span>
                    <span className={css.itemText}>{followers}</span>
                </li>
                <li className={classes}>
                    <span className={css.itemText}>Views</span>
                    <span className={css.itemText}>{views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.itemText}>Likes</span>
                    <span className={css.itemText}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}
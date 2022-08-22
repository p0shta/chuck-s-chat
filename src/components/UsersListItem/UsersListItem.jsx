import UserAvatar from 'components/UserAvatar/UserAvatar';

import s from './UsersListItem.module.scss';

export default function UsersListItem({ user }) {
    return (
        <li className={s.user}>
            <UserAvatar />
            <div className={s.userWrap}>
                <div className={s.info}>
                    <p className={s.name}>{user.name}</p>
                    <p>{user.message}</p>
                </div>
                <p className={s.date}>{user.date}</p>
            </div>
        </li>
    );
}

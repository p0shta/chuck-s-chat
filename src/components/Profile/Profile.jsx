import UserAvatar from 'components/UserAvatar/UserAvatar';

import s from './Profile.module.scss';

export default function Profile() {
    return (
        <div className={s.profile}>
            <UserAvatar />
            <p className={s.userName}>Maxim</p>
        </div>
    );
}

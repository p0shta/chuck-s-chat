import Profile from 'components/Profile/Profile';
import Filter from 'components/Filter/Filter';

import s from './UserBar.module.scss';

export default function UserBar() {
    return (
        <div className={s.userBar}>
            <Profile name={'Maksim'} />
            <Filter />
        </div>
    );
}

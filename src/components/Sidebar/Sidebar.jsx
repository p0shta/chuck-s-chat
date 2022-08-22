import Profile from 'components/Profile/Profile';
import Filter from 'components/Filter/Filter';
import ChatsList from 'components/ChatsList/ChatsList';

import s from './Sidebar.module.scss';

export default function Sidebar() {
    return (
        <div className={s.sidebar}>
            <div className={s.userBar}>
                <Profile />
                <Filter />
            </div>
            <ChatsList />
        </div>
    );
}

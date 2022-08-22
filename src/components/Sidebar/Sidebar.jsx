import UserBar from 'components/UserBar/UserBar';
import UsersList from 'components/UsersList/UsersList';

import s from './Sidebar.module.scss';

export default function Sidebar() {
    return (
        <div className={s.sidebar}>
            <UserBar />
            <UsersList />
        </div>
    );
}

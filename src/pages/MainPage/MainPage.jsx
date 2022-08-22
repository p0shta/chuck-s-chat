import Sidebar from 'components/Sidebar/Sidebar';
import Chat from 'components/Chat/Chat';

import s from './MainPage.module.scss';

export default function MainPage() {
    return (
        <div className={s.mainPage}>
            <Sidebar />
            <Chat />
        </div>
    );
}

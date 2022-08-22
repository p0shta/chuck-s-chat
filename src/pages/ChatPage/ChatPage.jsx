import Sidebar from 'components/Sidebar/Sidebar';
import Chat from 'components/Chat/Chat';

import s from './ChatPage.module.scss';

export default function ChatPage() {
    return (
        <div className={s.chatPage}>
            <Sidebar />
            <Chat />
        </div>
    );
}

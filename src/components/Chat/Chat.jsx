import Profile from 'components/Profile/Profile';
import TypeBar from 'components/TypeBar/TypeBar';
import s from './Chat.module.scss';

export default function Chat() {
    return (
        <div className={s.chat}>
            <div className={s.userBar}>
                <Profile name={'Sasha'} />
            </div>
            <TypeBar />
        </div>
    );
}

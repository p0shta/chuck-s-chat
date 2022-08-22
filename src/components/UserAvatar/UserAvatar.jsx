import s from './UserAvatar.module.scss';
export default function UserAvatar() {
    return (
        <div className={s.avatarWrap}>
            <div className={s.avatar}></div>
            <div className={s.verifiedLabel}></div>
        </div>
    );
}

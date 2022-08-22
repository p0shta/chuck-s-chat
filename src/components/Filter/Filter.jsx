import s from './Filter.module.scss';

export default function Filter() {
    return (
        <div className={s.filter}>
            <input className={s.input} type="text" placeholder="Search or start new chat" />
        </div>
    );
}

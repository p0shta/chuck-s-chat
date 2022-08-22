import s from './TypeBar.module.scss';

export default function TypeBar() {
    return (
        <form className={s.form}>
            <input className={s.input} type="text" placeholder="Type your message" />
            <button type="submit">Send</button>
        </form>
    );
}

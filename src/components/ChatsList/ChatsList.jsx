import ChatsListItem from 'components/ChatsListItem/ChatsListItem';
import s from './ChatsList.module.scss';

const users = [
    {
        id: 1,
        name: 'Carl',
        date: 'jun 12, 2022',
        message: 'Lorem ipsum dolor sit amet.',
    },
    {
        id: 2,
        name: 'Mark',
        date: 'aug 30, 2022',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    },
    {
        id: 3,
        name: 'John',
        date: 'nov 5, 2022',
        message: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    },
    {
        id: 4,
        name: 'Barbara',
        date: 'jun 25, 2022',
        message: 'Lorem dolor sit amet. Lorem sit amet.',
    },
];

export default function ChatsList() {
    return (
        <div className={s.chatList}>
            <h1 className={s.title}>CHATS</h1>
            <ul className={s.list}>
                {users.map(user => (
                    <ChatsListItem key={user.id} user={user} />
                ))}
            </ul>
        </div>
    );
}

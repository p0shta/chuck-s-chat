import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import ChatPage from '../pages/ChatPage/ChatPage';

export const App = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<ChatPage />} />
            </Routes>
        </Container>
    );
};

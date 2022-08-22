import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import MainPage from '../pages/MainPage/MainPage';

export const App = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Container>
    );
};

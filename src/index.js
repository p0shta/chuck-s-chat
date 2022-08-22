import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <Provider>
    <BrowserRouter basename="/chuck-s-chat/">
        <App />
    </BrowserRouter>
    // </Provider>
);

import React from "react";
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import "../css/app.css"
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import setAuthToken from "./redux/utils/setauthtoken";


const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);

if (localStorage.getItem('token')) {
    // setAuthToken set the x-auth-token to the header with axios, like we do in postman
    setAuthToken(localStorage.getItem('token'));
}
export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    );
}

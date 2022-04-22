import React from "react";
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import "../css/app.css"
import Routes from './routes';
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);

export default function App() {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>     
    );
}
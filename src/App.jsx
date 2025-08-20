import './App.css';
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import React from 'react';
import Main from "Pages/Main";
import TodoPage from 'Pages/todo/TodoPage'; // <-- 새로 추가

function App() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* '/todo' 경로로 접속하면 TodoPage를 보여주도록 라우트를 추가합니다. */}
                    <Route path="/todo" element={<TodoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;

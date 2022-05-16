import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
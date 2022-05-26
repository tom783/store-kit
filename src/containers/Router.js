import { SideNav } from 'components/layouts';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Test } from './pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SideNav />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route path="/*" element={<div>nothing</div>} />
      </Routes>
    </BrowserRouter>
  );
}

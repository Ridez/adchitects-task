import React from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from '../layouts/Layout';
import Home from '../pages/Home';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

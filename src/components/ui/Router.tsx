import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { FirstEnter } from '../pages/firstEnter/FirstEnter'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<FirstEnter />} path="/first_enter" />
        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

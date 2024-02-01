import React from 'react';
// import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/signup'} element={<SignUpPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
      </Routes>
      {/* <SignUpPage/> */}
    </div>
  )
}

export default App


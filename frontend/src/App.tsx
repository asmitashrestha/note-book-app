import React from "react";
// import HomePage from './pages/HomePage';
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import Notes from "./components/Notes";
import AddNotes from "./components/AddNotes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/signup"} element={<SignUpPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/reset-password"} element={<ResetPassword />} />
        <Route path="/change-password"  element={<ChangePassword/>}/>
        <Route path={"/notes"} element={<Notes/>}/>
        <Route path={"/add-notes"} element={<AddNotes/>}/>

      </Routes>
      {/* <SignUpPage/> */}
    </div>
  );
};

export default App;

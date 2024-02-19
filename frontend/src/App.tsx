import React from "react";
// import HomePage from './pages/HomePage';
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./components/ChangePassword";
import Notes from "./components/Notes";
import AddNotes from "./components/AddNotes";
import Settings from "./pages/Settings";

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
        <Route path={"/settings"} element={<Settings/>}/>

      </Routes>
      {/* <SignUpPage/> */}
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
// import SignUp from "./pages/Auth/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Faculties from "./pages/Faculties/Faculties";
import Teachers from "./pages/Teachers/Teachers";
import Department from "./pages/Department/Department";
import PersonalLoad from "./pages/PersonalLoad/PersonalLoad";
import Plan from "./pages/Plan/Plan";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/faculties/:department_id" element={<Department />} />
        
        <Route path="/personal_load/:department_id/:teacher_id" element={<PersonalLoad />} />

        <Route path="/plan/:department_id" element={<Plan />} />

        {/* <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

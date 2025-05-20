import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { createContext, useState } from "react";

const userInfo = [
  {
    id: "maehyeng",
    post: 1902,
    follower: 13392,
    follow: 71,
  },
];

export const InstagramStateContext = createContext();

function App() {
  return (
    <InstagramStateContext value={userInfo}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<UserPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </InstagramStateContext>
  );
}

export default App;

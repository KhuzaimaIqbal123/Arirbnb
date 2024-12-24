import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Homepage from "./Homepage";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import BookingPage from "../Components/BookingPage";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {

    const {user} = useAuthStore();

    return (
        <div>
               <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking/:id" element={user ? <BookingPage /> : <Navigate to= '/login' />}/>
      </Routes>
        </div>
        );
        };
        export default App;

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="App"> 
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element= {<Register/>} />
        
      </Routes>
      </AuthProvider>
    
    </div>

  );
}

export default App;
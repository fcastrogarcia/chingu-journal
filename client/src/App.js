import React from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./components/Auth/Index";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Auth />
      </div>
    </AuthProvider>
  );
}

export default App;

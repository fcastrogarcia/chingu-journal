import React from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Landing />
      </div>
    </AuthProvider>
  );
}

export default App;

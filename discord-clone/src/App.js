import React from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Chat from "../src/components/Chat"


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}
export default App;
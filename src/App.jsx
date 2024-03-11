/* eslint-disable react/no-unescaped-entities */

import "./App.css";


import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Aside/>
      <div className="main-content">
       <Navbar/>
        <section style={{
          scrollBehavior: "smooth"
        }}><Outlet/></section>
      </div>
    </>
  );
}

export default App;

import React from "react";
import Login from "./components/login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/home/header/Header";
import "./App.css"
import Content from "./components/home/content/Content";
function App() {
  return (
    <>
 {/* <Login/> */}
 <Header/>
 <Content/>
 

    

 <ToastContainer
 theme="colored"
 />


    </>
  );
}

export default App;

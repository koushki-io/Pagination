import React,{useState} from "react";
import Login from "./components/login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/home/header/Header";
import './bootstarap/bootstrap.css'
import "./App.css"
import Content from "./components/home/content/Content";

function App() {
  const [count, setcount] = useState()
  return (
    <>
 {/* <Login/> */}
 <Header count={count}/>
 <Content setcount={setcount} />
 

    

 <ToastContainer
 theme="colored"
 />


    </>
  );
}

export default App;

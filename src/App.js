import React,{useState} from "react";
import Login from "./components/login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './bootstarap/bootstrap.css'
import "./App.css"
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Home from "./components/home/home/Home";
import { useSelector } from "react-redux";


function App() {
  const [count, setcount] = useState()
const login= useSelector(state=>state.getLogin)
  return (
    <BrowserRouter>

    <Routes>
      {!Object.keys(login).length 
      ?
      <>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Navigate to="/login"/>}/>
      </>
      :
      <>
      <Route path='/home' element={<Home setcount={setcount} count={count} user={login.username} />}/>
      <Route path='/' element={<Navigate to="/home"/>}/>

      </>
      }
      
      



    </Routes>


 <ToastContainer theme="colored"/>
    </BrowserRouter>
  );
}

export default App;

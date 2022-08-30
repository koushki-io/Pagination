import React, { useEffect, useState } from 'react'
import { validate } from './validate'
import { notify } from '../Alert/toast';
import styles from './login.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginAction } from '../redux/action';




const Login = () => {
   const dispatch= useDispatch()
  const navigate= useNavigate()
    const [data, setdata] = useState({
        username:"",
        password:"",
    

    })      
    const [erorr, seterorr] = useState({})
    const [touched, settouched] = useState({})
    useEffect(() => {
        seterorr(validate(data))

    }, [data,touched])


    const chaneHandler=(e)=>{
            setdata({...data,[e.target.name]:e.target.value})
        
    }
    const focusHandler=(e)=>{
        settouched({...touched,
        [e.target.name]:true,

        })

    }

    const submitHandler=(e)=>{
        e.preventDefault()
        
        if(!Object.keys(erorr).length){
                dispatch(LoginAction(data,navigate))
          notify("You signed in successFully","success")
        }else{
            notify("Invalid data!","Error")
            settouched({
                name:true,
                username:true,
                password:true,
               
            })
        }

     

    }


       
    
   
          
    return (
    <div className={styles.container}> 
        <form className={styles.formContainer} onSubmit={submitHandler} >
            <h2 className={styles.header}>Login</h2>
            

            <div className={styles.formFild}>
                <label>username</label>
                <input 
                className={(touched.email && erorr.email ) ? styles.uncompleted  : styles.formInput }
                type="text" name='username' value={data.username} onChange={chaneHandler}  onFocus={focusHandler}/>
                {touched.username && erorr.username &&  <span style={{color:"red"}}>{erorr.username}</span>}
            </div>

            <div className={styles.formFild}>
                <label>password</label>
                <input
                className={(touched.password && erorr.password ) ? styles.uncompleted  : styles.formInput }
                
                type="password" name='password' value={data.password} onChange={chaneHandler}  onFocus={focusHandler}/>
                {touched.password && erorr.password &&  <span style={{color:"red"}}>{erorr.password}</span>}

            </div>

           

          
            <div className={styles.formButtons}>
                <button type='submit'>Login</button>
            </div>

            

           
        </form>
     
    </div>
  )
}

export default Login
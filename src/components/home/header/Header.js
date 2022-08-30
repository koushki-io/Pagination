import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogOutAction } from '../../redux/action'
import styles from './header.module.css'

const Header = ({count,user}) => {
   const dispatch= useDispatch()
     const navigate= useNavigate()
  const logoutHandler=()=>{
    dispatch(LogOutAction(navigate))
  }
  return (
    <div className={styles.Header}>
        <div className={styles.username}>{user} /
        <span
        onClick={logoutHandler}
         className={styles.logout}>Logout</span></div>
        <div className={styles.countSerch}>{count}</div>
    </div>
  )
}

export default Header
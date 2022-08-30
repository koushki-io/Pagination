import React from 'react'
import styles from './header.module.css'

const Header = ({count}) => {
  return (
    <div className={styles.Header}>
        <div className={styles.username}>mehdi</div>
        <div className={styles.countSerch}>{count}</div>
    </div>
  )
}

export default Header
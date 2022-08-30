import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
        <div className={styles.username}>mehdi</div>
        <div className={styles.countSerch}>4</div>
    </div>
  )
}

export default Header
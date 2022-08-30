import React from 'react'
import styles from './content.module.css'

const Content = () => {
  return (
    <div className={styles.Content}>
        <h2>Post</h2>
        <div className={styles.SerchBox}>
            <input type="text" />
            <button>Serch</button>
        </div>
        <div className={styles.Post}></div>
    </div>
  )
}

export default Content
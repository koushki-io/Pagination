import React,{useEffect} from 'react'
import styles from './content.module.css'
import { useDispatch , useSelector} from 'react-redux'
import { PostAction } from '../../redux/action'

const Content = () => {
    const dispatch= useDispatch()
    const {posts}= useSelector(state=>state.getPosts)
    console.log(posts);
    
    useEffect(() => {
        dispatch(PostAction())
    }, [])
  return (
    <div className={styles.Content}>
        <h2>Post</h2>
        <div className={styles.SerchBox}>
            <input type="text" />
            <button>Serch</button>
        </div>
        <div className={styles.Post}>
            {posts.map((item)=>{
                return(
                    <div key={item.id} className={styles.ContentItem}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        <button>edite post</button>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Content
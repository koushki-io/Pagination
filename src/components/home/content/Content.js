import React,{useEffect,useState} from 'react'
import styles from './content.module.css'
import { useDispatch , useSelector} from 'react-redux'
import { PostAction } from '../../redux/action'
import {Pagination} from 'react-bootstrap';

const Content = () => {
    const dispatch= useDispatch()
    const {posts}= useSelector(state=>state.getPosts)
    const [page, setpage] = useState(1)
    const [pagination, setpagination] = useState([])
    const [paginationEnd, setpaginationEnd] = useState([])

   useEffect(() => {
    setpagination(
        posts.filter((item,index)=>!(index % 12))  
    )
    setpaginationEnd(
        posts.filter((item,index)=>!(index % 24))  
    )
   
   }, [posts])
    
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
            {posts.slice((page -1) * 12 ,page * 12).map((item)=>{
                
                return(
                    <div key={item.id} className={styles.ContentItem}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        <button>edite post</button>
                        <h3>{item.id}</h3>

                    </div>
                )
            })}
          
        </div>
      
 <Pagination>
      <Pagination.First   onClick={()=>{
        setpage(last=> last - 1)
    }} />

      {paginationEnd.map((item,index)=><Pagination.Item key={index} active={index + 1 === page}
      onClick={()=>{
        setpage(index + 1)
      }}
      >{index + 1}</Pagination.Item>

      )}
      <Pagination.Ellipsis />
      <Pagination.Item 
      onClick={()=>{
        setpage(pagination.length)
      }}
      
      active={page===pagination.length}>{pagination.length} </Pagination.Item>

      
      <Pagination.Last onClick={()=>{
                setpage(last=>last+1)
            }}
    
      />
     
    </Pagination>
            
    </div>
  )
}

export default Content
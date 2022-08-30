import React,{useEffect,useState} from 'react'
import styles from './content.module.css'
import { useDispatch , useSelector} from 'react-redux'
import { PostAction } from '../../redux/action'
import {Pagination} from 'react-bootstrap';
import Example from '../modal/Edite';

const Content = () => {
    const dispatch= useDispatch()
    const {posts}= useSelector(state=>state.getPosts)
    const [page, setpage] = useState(1)
    const [pagination, setpagination] = useState([])
    const [paginationEnd, setpaginationEnd] = useState([])
    const [serch, setserch] = useState('')
    const [serchPost, setserchPost] = useState([])
    

   const changeHandler=(e)=>{
    setserch(e.target.value)
    }
   useEffect(() => {
    setpagination(
        serchPost.filter((item,index)=>!(index % 12))  
    )
    setpaginationEnd(
        serchPost.filter((item,index)=>!(index % 24))  
    )
   
   }, [posts,serchPost])
   useEffect(() => {
    setserchPost(
        posts.filter(item=>item.title.toLowerCase().includes(serch.toLowerCase().trim()))
    )
        
   }, [serch,posts])
    
    useEffect(() => {
        dispatch(PostAction())
    }, [])
  return (
    <div className={styles.Content}>
        <h2>Post</h2>
        <div className={styles.SerchBox}>
            <input type="text" onChange={changeHandler} />
            <button 
            >Serch</button>
            <h4>{serchPost.length}</h4>
        </div>
        <div className={styles.Post}>
            {serchPost.slice((page -1) * 12 ,page * 12).map((item)=>{
                
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

        {!(serchPost.length==0) &&

<Pagination>
<Pagination.First 
  disabled={page==1}  onClick={()=>{
  setpage(last=> last - 1)
}} />

{(posts.length / serchPost.length) < 1.66 
          ?
paginationEnd.map((item,index)=><Pagination.Item key={index} active={index + 1 === page}
onClick={()=>{
  setpage(index + 1)
}}
>{index + 1}</Pagination.Item>
)
          :

          pagination.map((item,index)=><Pagination.Item key={index} active={index + 1 === page}
          onClick={()=>{
            setpage(index + 1)
          }}
          >{index + 1}</Pagination.Item>
          )

  }


{(posts.length / serchPost.length) < 1.66  

&&
<Pagination.Ellipsis />
}
{(posts.length / serchPost.length) < 1.66 
&&
  <Pagination.Item 
onClick={()=>{
  setpage(pagination.length)
}}

active={page===pagination.length}>{pagination.length} </Pagination.Item>

}



<Pagination.Last
disabled={page===pagination.length} onClick={()=>{
          setpage(last=>last+1)
      }}

/>

</Pagination>
        
        
        
        }
      
    <Example/>

    </div>
  )
}

export default Content
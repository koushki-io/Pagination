import axios from 'axios'
const getAxios=()=>{
    return axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/',
    })
}

export const PostAction=()=>async(dispatch)=>{
    dispatch({type:"POST-REQUEST"})
    try {
const {data}= await getAxios().get('posts')
dispatch({type:"POST-SUCCESS", payload:data})
        
    } catch (error) {
        dispatch({type:"POST-ERROR", payload:error.message})
    }

}


export const EditPageAction=(id)=>(dispatch,getdata)=>{
    const {posts}=getdata().getPosts
    const edite =posts.find(item=>item.id ===id)
   dispatch({type:"EDITE" , payload:edite})
    

}

export const EditChangeAction=(change)=>(dispatch,getdata)=>{
    const {posts}=getdata().getPosts
   posts.find(item=>item.id===change.id).title =change.title
   posts.find(item=>item.id===change.id).body =change.body
   dispatch({type:"EDITE" , payload:posts})
    

}


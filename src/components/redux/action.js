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
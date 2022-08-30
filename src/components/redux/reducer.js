
export const PostReducer = (state = {posts:[],loading:false,error:''}, action) => {
    switch (action.type) {
        case "POST-REQUEST":
            return {...state,loading:true,error:''}
        case "POST-SUCCESS":
            return {...state,posts:action.payload,loading:false,error:''}
        case "POST-ERROR":
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}
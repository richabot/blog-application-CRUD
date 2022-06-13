import * as types from "./actionTypes";


const initialState={
    blogs:[],
    loading:false,
    error:"",
    currentBlog:{}

}
const blogreducer=(state=initialState,action)=>{
     // eslint-disable-next-line
    const{type,payload}=action;
    switch(type){
        case types.FETCH_BLOG_POSTS_REQUEST:
        return{
            ...state,
            loading:true,
            error:""
        }
        case types.FETCH_BLOG_POSTS_SUCCESS:
        return{
            ...state,
            loading:false,
            blogs:payload,
            error:""
        }
        case types.FETCH_BLOG_POSTS_FAILURE:
        return{
            ...state,
            loading:false,
            error:payload
        }
        case types.FETCH_SINGLE_BLOG_REQUEST:
        return{
            ...state,
            loading:true,
            error:""
        }
        case types.FETCH_SINGLE_BLOG_SUCCESS:
        return{
            ...state,
            loading:false,
            currentBlog:payload,
            error:""
        }
        case types.FETCH_SINGLE_BLOG_FAILURE:
        return{
            ...state,
            loading:false,
            error:payload
        }
        default:
            return state;
    }
}
export default blogreducer;
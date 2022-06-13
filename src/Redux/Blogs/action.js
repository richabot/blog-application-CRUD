import * as types from "./actionTypes";
import axios from "axios";

const fetchBlogPostRequest=(payload)=>{
    return{
        type:types.FETCH_BLOG_POSTS_REQUEST,
        payload
    }
}

const fetchBlogPostSuccess=(payload)=>{
    return{
        type:types.FETCH_BLOG_POSTS_SUCCESS,
        payload
    }
}
const fetchBlogPostFailure=(payload)=>{
    return{
        type:types.FETCH_BLOG_POSTS_FAILURE,
        payload
    }
}

const fetchBlogPost=(payload)=>(dispatch)=>{
    dispatch(fetchBlogPostRequest());
    axios.get(" http://localhost:8080/blogs")
    .then(r=>dispatch(fetchBlogPostSuccess(r.data))
    )
   
    .catch(e=>dispatch(fetchBlogPostFailure(e.data)))


}
const fetchSingleBlogPostRequest=(payload)=>{
    return{
        type:types.FETCH_SINGLE_BLOG_REQUEST,
        payload
    }
}

const fetchSingleBlogPostSuccess=(payload)=>{
    return{
        type:types.FETCH_SINGLE_BLOG_SUCCESS,
        payload
    }
}
const fetchSingleBlogPostFailure=(payload)=>{
    return{
        type:types.FETCH_SINGLE_BLOG_FAILURE,
        payload
    }
}

const fetchSingleBlogPost=(payload)=>(dispatch)=>{
    dispatch(fetchSingleBlogPostRequest());
    axios.get(`http://localhost:8080/blogs/${payload}`)
    .then(r=>dispatch(fetchSingleBlogPostSuccess(r.data))
    )
   
    .catch(e=>dispatch(fetchSingleBlogPostFailure(e.data)))


}
const createBlogPostRequest=(payload)=>{
    return{
        type:types.CREATE_BLOG_POST_REQUEST,
        payload
    }
}

const createBlogPostSuccess=(payload)=>{
    return{
        type:types.CREATE_BLOG_POST_SUCCESS,
        payload
    }
}
const createBlogPostFailure=(payload)=>{
    return{
        type:types.CREATE_BLOG_POST_FAILURE,
        payload
    }
}

const createBlogPost=(payload)=>(dispatch)=>{
    dispatch(createBlogPostRequest());
    axios.post(`http://localhost:8080/blogs`,payload)
    .then(r=>createBlogPostSuccess(r.data)
    )
   
    .catch(e=>createBlogPostFailure(e.data))


}
const updateBlogPostRequest=(payload)=>{
    return{
        type:types.UPDATE_BLOG_POST_REQUEST,
        payload
    }
}

const updateBlogPostSuccess=(payload)=>{
    return{
        type:types.UPDATE_BLOG_POST_SUCCESS,
        payload
    }
}
const updateBlogPostFailure=(payload)=>{
    return{
        type:types.UPDATE_BLOG_POST_FAILURE,
        payload
    }
}

const updateBlogPost=(payload)=>(dispatch)=>{
    dispatch(updateBlogPostRequest());
    axios.patch(`http://localhost:8080/blogs/${payload.id}`,payload)
    .then(r=>updateBlogPostSuccess(r.data)
    )
   
    .catch(e=>updateBlogPostFailure(e.data))


}
const deleteBlogPostRequest=(payload)=>{
    return{
        type:types.DELETE_BLOG_POST_REQUEST,
        payload
    }
}

const deleteBlogPostSuccess=(payload)=>{
    return{
        type:types.DELETE_BLOG_POST_SUCCESS,
        payload
    }
}
const deleteBlogPostFailure=(payload)=>{
    return{
        type:types.DELETE_BLOG_POST_FAILURE,
        payload
    }
}

const deleteBlogPost=(payload)=>(dispatch)=>{
    dispatch(deleteBlogPostRequest());
    axios.delete(`http://localhost:8080/blogs/${payload}`,payload)
    .then(r=>deleteBlogPostSuccess(r.data)

    )
    .then((data)=>
    // 
    console.log(data,"data11")
    )
   
    .catch(e=>deleteBlogPostFailure(e.data))


}
export {fetchBlogPost,fetchSingleBlogPost,createBlogPost,updateBlogPost,deleteBlogPost}


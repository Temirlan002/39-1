import React, { useEffect } from "react";
import { getPosts } from "../../store/PostsSlice";
import { useDispatch, useSelector } from "react-redux";
import PostSpinner from '../../components/PostSpinner'
import Post from "../../components/Post";

const PostPage = () => {

    const { posts, preloader } = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()

    const getPostsFunc = () => {
        dispatch(getPosts())
    }

    useEffect(() => {
        getPostsFunc()
    }, [])

    return (
        <div>
            {/* <button onClick={getPostsFunc}>get posts</button>
            <button>delete all</button> */}

            {preloader ? <PostSpinner /> : posts.map(post => <Post postInfo={post} />)}
        </div> 
    )
}

export default PostPage;
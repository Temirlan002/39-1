import React from "react";

const Post = ({postInfo}) => { 

    return (
        <div>
            <h1>{postInfo.title}</h1>
            <button>more info</button>
            <p>-------------------</p>
        </div>
    )
}

export default Post;
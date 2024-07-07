import React from "react";
import Post from "./Post";

const PostsList = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => (
                <Post key={index} post={post} index={index} />
            ))}
        </div>
    );
};

export default PostsList;

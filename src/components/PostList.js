import React from "react";
import Post from "./Post";
import "./postlist.css";
const PostsList = ({ posts, onDelete }) => {
    return (
        <div className="postlist">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    post={post}
                    index={index}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default PostsList;

import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, index }) => {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/edit/${index}`}>Edit</Link>
        </div>
    );
};

export default Post;

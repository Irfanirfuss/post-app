import React from "react";
import { Link } from "react-router-dom";
import PostsList from "../components/PostList";

const PostsDisplay = ({ posts }) => {
    return (
        <div>
            <h1>Posts</h1>
            <PostsList posts={posts} />
            <Link to="/create">Create Post</Link>
        </div>
    );
};

export default PostsDisplay;

import React from "react";
import { Link } from "react-router-dom";
import PostsList from "../components/PostList";

import "./postdisplay.css";

const PostsDisplay = ({ posts, onDelete }) => {
    return (
        <div className="main">
            <div className="header">
                <h1>Posts</h1>
                <Link to="/create" className="create">
                    Create Post
                </Link>
            </div>
            {posts.length === 0 ? (
                <h1>No Posts Available</h1>
            ) : (
                <PostsList posts={posts} onDelete={onDelete} />
            )}
        </div>
    );
};

export default PostsDisplay;

import React from "react";
import PostForm from "../components/PostForm";

const EditPost = ({ post, onSave }) => {
    return (
        <div>
            <h1>Edit Post</h1>
            <PostForm post={post} onSave={onSave} />
        </div>
    );
};

export default EditPost;

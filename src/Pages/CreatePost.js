import React from "react";
import PostForm from "../components/PostForm";

const CreatePost = ({ onSave }) => {
    return (
        <div>
            <h1>Create Post</h1>
            <PostForm onSave={onSave} />
        </div>
    );
};

export default CreatePost;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostForm = ({ post, onSave }) => {
    const [title, setTitle] = useState(post?.title || "");
    const [content, setContent] = useState(post?.content || "");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, content });
        history("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default PostForm;

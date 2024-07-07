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
        <div className="form-con">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title : </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content : </label>
                    <textarea
                        cols={25}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default PostForm;

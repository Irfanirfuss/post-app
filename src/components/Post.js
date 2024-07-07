import React from "react";

import { Link } from "react-router-dom";
import "./post.css";

const colors = [
    "purple",
    "red",
    "orange",
    "purple",
    "black",
    "pink",
    "yellow",
    "gray",
    "blue",
    "violet",
    "indigo",
];

const Post = ({ post, index, onDelete }) => {
    return (
        <div className="post">
            <div>
                <div
                    className="icon"
                    style={{ backgroundColor: colors[index] }}>
                    <h2> {post.title[0]}</h2>
                </div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
            <div className="btn-con">
                <Link to={`/edit/${index}`} className="create">
                    Edit
                </Link>
                <button onClick={() => onDelete(index)}>delete</button>
            </div>
        </div>
    );
};

export default Post;

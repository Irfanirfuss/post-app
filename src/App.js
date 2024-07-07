import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import PostsDisplay from "./Pages/PostsDisplay";
import PostForm from "./components/PostForm";

const App = () => {
    const [posts, setPosts] = useState([]);

    const deletePost = (index) => {
        const newPosts = posts.filter((each, ind) => ind !== index);
        setPosts(newPosts);
    };

    const addPost = (post) => {
        setPosts([...posts, post]);
    };

    const updatePost = (index, updatedPost) => {
        const newPosts = [...posts];
        newPosts[index] = updatedPost;
        setPosts(newPosts);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PostsDisplay posts={posts} onDelete={deletePost} />
                    }
                />
                <Route path="/create" element={<PostForm onSave={addPost} />} />
                <Route
                    path="/edit/:index"
                    element={
                        <EditPostWrapper posts={posts} onSave={updatePost} />
                    }
                />
            </Routes>
        </Router>
    );
};

const EditPostWrapper = ({ posts, onSave }) => {
    const { index } = useParams();
    const post = posts[parseInt(index, 10)];

    return (
        <PostForm
            post={post}
            onSave={(updatedPost) => onSave(parseInt(index, 10), updatedPost)}
        />
    );
};

export default App;

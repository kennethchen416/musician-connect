import { createPost } from "../api/posts";
import React from 'react';

const CreatePost = (props) => {
    const [text, setText] = React.useState("");

    const submitPost = async (e) => {
        e.preventDefault();

        if (text === "") {
            return; // add error message later
        }

        await createPost(text);

        window.location.reload();
    }

    return (
        <form onSubmit={submitPost}>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Submit post</button>
        </form>
    );
}

export default CreatePost;
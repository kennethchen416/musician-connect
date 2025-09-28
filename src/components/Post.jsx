const Post = (props) => {
    const post = props.post;
    return (
        <div>
            <p>{post.text}</p>
        </div>
    )
}

export default Post;
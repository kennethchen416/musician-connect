import React from 'react';
import './App.css';
import { fetchPosts } from './api/posts';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

function App() {
  const [posts, setPosts] = React.useState([]);


  React.useEffect(() => {
    const refreshPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    refreshPosts();
  }, []);

  return (
    <div className="App">
      <h1>Musician Connect</h1>

      <CreatePost />

      {/* TODO: add post.id and use as key */}
      {posts.map(post => <Post key={post.text} post={post} />)}
    </div>
  );

}


export default App;

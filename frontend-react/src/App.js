import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import NewPost from "./NewPost"
import PostList from "./PostList"




function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/posts")
      .then((r) => r.json())
      .then((posts) => setPosts(posts));
  }, []);

  function handleAddPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function handleDeletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  function handleUpdatePost(updatedPost) {
    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
  }

  const displayedPosts =posts.filter((post) =>
    post.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
      <Search search={search} onSearchChange={setSearch} />
      <PostList
        posts={displayedPosts}
        currentAuthor={author}
        onPostDelete={handleDeletePost}
        onUpdatePost={handleUpdatePost}
      />
      <NewPost currentAuthor={author} onAddPost={handleAddPost} />
    </main>
  );
}

export default App;

import React, { useState } from "react";

function NewPost({ title,currentAuthor, onAddPost }) {
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: currentAuthor.author,
        title:title,
        body: body,
      }),
    })
      .then((r) => r.json())
      .then((newPost) => {
        onAddPost(NewPost);
        setBody("");
      });
  }

  return (
    <form className="new-post" onSubmit={handleSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewPost;

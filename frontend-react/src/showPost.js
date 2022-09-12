import React, { useState } from "react";

function showPost({ id, body, onUpdatePost }) {
  const [postBody, setPostBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: postBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedPost) => onUpdatePost(updatedPost));
  }

  return (
    <form className="show-post" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default showPost;

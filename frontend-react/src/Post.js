import React, { useState } from "react";
import showPost from "./showPost";

function post({ post, currentAuthor, onPostDelete, onUpdatePost }) {
  const [isEditing, setIsEditing] = useState(false);

  const { id,title, author, body, created_at: createdAt } = post;

  const timestamp = new Date(createdAt).toLocaleTimeString();

  const isCurrentAuthor = currentAuthor.author === author;

  function handleDeleteClick() {
    fetch(`http://localhost:9292/posts/${id}`, {
      method: "DELETE",
    });

    onPostDelete(id);
  }

  function handleUpdatePost(updatedPost) {
    setIsEditing(false);
    onUpdatePost(updatedPost);
  }

  return (
    <li>
      <span className="author">{author}</span>
      <span className="time">{timestamp}</span>
      {isEditing ? (
        <EditPost
          id={id}
          body={body}
          title={title}
          onUpdatePost={handleUpdatePost}
        />) : 
        (
        <p>{body}</p>)}

      {isCurrentAuthor ? (
        <div className="actions">
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
          <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </div>
      ) : null}
    </li>
  );
}

export default showPost;

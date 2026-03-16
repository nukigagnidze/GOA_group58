import React, { useState } from "react";

function CommentModal({ postId, closeModal }) {

  const [text, setText] = useState("");

  const submitComment = async () => {

    await fetch(`/api/posts/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: "User",
        text
      })
    });

    closeModal();
  };

  return (
    <div className="modal">

      <div className="modal-content">

        <h3>Add Comment</h3>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={submitComment}>
          Submit
        </button>

        <button onClick={closeModal}>
          Close
        </button>

      </div>

    </div>
  );
}

export default CommentModal;
import React, { useState } from "react";
import CommentModal from "./CommentModal";

function Post({ post }) {

  const [showModal, setShowModal] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const likePost = async () => {
    const res = await fetch(`/api/posts/${post._id}/like`, {
      method: "PUT"
    });

    const data = await res.json();
    setLikes(data);
  };

  return (
    <div className="post">

      <p>{post.text}</p>

      <button onClick={likePost}>
        👍 Like ({likes})
      </button>

      <button onClick={() => setShowModal(true)}>
        💬 Comment
      </button>

      {showModal && (
        <CommentModal
          postId={post._id}
          closeModal={() => setShowModal(false)}
        />
      )}

    </div>
  );
}

export default Post;
const [posts, setPosts] = useState([]);
const [text, setText] = useState("");

const uploadPost = () => {
  const newPost = {
    id: Date.now(),
    text: text,
    image: image,
  };

  setPosts([...posts, newPost]);
};
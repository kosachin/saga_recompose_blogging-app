import { useSelector } from "react-redux";
import PostEnhancer from "../hoc/postHOC";

const Post = ({ post, navigate }) => {
  const store = useSelector((store) => store.posts);
  // console.log(store);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h3>{post?.id}</h3>
      <h4>{post?.title}</h4>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostEnhancer(Post);

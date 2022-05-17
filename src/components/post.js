import { useSelector } from "react-redux";
import PostEnhancer from "../hoc/postHOC";

const Post = ({ post, loading, navigate, handleRemoveOnePostSuc }) => {
  const backBtn = () => {
    handleRemoveOnePostSuc();
    navigate(-1);
  };
  return (
    <div>
      {!loading ? (
        <>
          <button onClick={backBtn}>Back</button>
          <h3>{post?.id}</h3>
          <h4>{post?.title}</h4>
          <p>{post?.body}</p>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default PostEnhancer(Post);

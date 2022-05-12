import PostEnhancer from "../hoc/postHOC";

const Post = () => {
//   console.log(post);
  return <p>Single Post</p>;
};

export default PostEnhancer(Post);

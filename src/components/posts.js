import { Link, Outlet } from "react-router-dom";
import PostsEnhancer from "../hoc/postsHoc";
const PostsPage = ({ loading, posts, navigate }) => {
  return (
    <div>
      {loading ? <h3>Loading</h3> : <p>Posts page</p>}
      <br />
      <button onClick={() => navigate(-1)}>Back</button>
      <br />
      <br />
      <div>
        {posts.map((e) => (
          <Link to={`/posts/${e.id}`} key={e.id}>
            {e.title}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default PostsEnhancer(PostsPage);

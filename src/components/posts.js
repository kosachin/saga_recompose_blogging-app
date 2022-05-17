import { Link, Outlet } from "react-router-dom";
import PostsEnhancer from "../hoc/postsHoc";
const PostsPage = ({ loading, posts, navigate, handleDeleteOnePost }) => {
  const deleteDialog = (e, id) => {
    if (
      window.confirm(
        "Do you really want to delete a product with id" + ` ${id} ???`
      )
    ) {
      handleDeleteOnePost(id);
    }
  };
  return (
    <div>
      {loading ? <h3>Loading</h3> : <p>Posts page</p>}
      <br />
      <button onClick={() => navigate(-1)}>Back</button>
      <br />
      <br />
      <div>
        {posts.map((e) => (
          <div key={e.id} style={{ display: "flex" }}>
            <Link to={`/posts/${e.id}`} key={e.id}>
              {e.title}
            </Link>
            <button onClick={(event) => deleteDialog(event, e.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default PostsEnhancer(PostsPage);

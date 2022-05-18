import { Link, Outlet } from "react-router-dom";
import PostsEnhancer from "../hoc/postsHoc";
const PostsPage = ({
  loading,
  posts,
  navigate,
  handleDeleteOneLoading,
  handleDeleteOnePost,
}) => {
  const deleteDialog = (e, id) => {
    if (
      window.confirm(
        "Do you really want to delete a product with id" + ` ${id} ???`
      )
    ) {
      handleDeleteOneLoading(id);
      handleDeleteOnePost(id);
    }
  };
  const fetchOnePost = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div>
      {loading ? <h3>Loading</h3> : <p>Posts page</p>}
      <button onClick={() => navigate("/add/post")}>Add post</button>
      <button onClick={() => navigate("/")}>Back</button>
      <div>
        {posts.map((e) => (
          <div key={e.id} style={{ display: "flex" }}>
            <h3>{e.title}</h3>
            <button onClick={() => fetchOnePost(e.id)} key={e.id}>
              View
            </button>
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

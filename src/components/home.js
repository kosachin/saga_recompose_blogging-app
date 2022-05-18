import { NavLink, Outlet } from "react-router-dom";

import HomeEnhancer from "../hoc/homeHOC";
const Home = ({
  posts,
  navigate,
  handleFetchAllPostsLoading,
  handleFetchAllPostsSuc,
}) => {
  const a = () => {
    if (posts.length <= 0) {
      handleFetchAllPostsLoading();
      handleFetchAllPostsSuc();
      navigate("/posts");
    }
  };
  return (
    <div>
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <button
        style={{ display: posts.length > 0 ? "none" : "block" }}
        onClick={a}
      >
        Posts
      </button>
      <Outlet></Outlet>
    </div>
  );
};
export default HomeEnhancer(Home);

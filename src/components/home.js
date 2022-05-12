import { Link, NavLink, Outlet } from "react-router-dom";
const link = {
  textDecoration: "none",
};
const Home = () => {
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
      <NavLink
        style={({ isActive }) => {
          return {
            display: isActive ? "none" : "block",
          };
        }}
        to="/posts"
      >
        Posts
      </NavLink>
      <Outlet></Outlet>
    </div>
  );
};
export default Home;

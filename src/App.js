import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import PostsPage from "./components/posts";
import Post from "./components/post";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

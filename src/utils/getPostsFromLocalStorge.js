export const getPostsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("posts")).posts;
};

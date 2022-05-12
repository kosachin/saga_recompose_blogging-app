export const savePostsToLocalStorage = (data) => {
  localStorage.setItem(
    "posts",
    JSON.stringify({ posts: data, total: data.length })
  );
};

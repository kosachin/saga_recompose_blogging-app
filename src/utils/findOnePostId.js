export const findOnePostById = (id, posts) => {
  console.log(
    posts.find((e) => e.id === id),
    id,
    posts
  );
  return posts.find((e) => e.id === id);
};

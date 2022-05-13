import { getPostsFromLocalStorage } from "./getPostsFromLocalStorge";

export const findOnePostById = (id, posts) => {
  // return getPostsFromLocalStorage().find((e) => e.id === Number(id));
  return posts.find((e) => e.id === Number(id));
};

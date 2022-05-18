import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compose, withHandlers, withProps } from "recompose";
import { fetchPosts, fetchPostsReq } from "../redux/actions";

const HomeHOC = compose(
  connect(
    (store) => ({
      posts: store.posts,
      loading: store.loading,
    }),
    (dispatch) => ({
      fetchAllPostsLoading: () => dispatch(fetchPostsReq()),
      fetchAllPostsSuc: () => dispatch(fetchPosts()),
    })
  ),
  withProps(() => {
    const navigate = useNavigate();
    return { navigate };
  }),
  withHandlers({
    handleFetchAllPostsLoading:
      ({ fetchAllPostsLoading }) =>
      () =>
        fetchAllPostsLoading(),
    handleFetchAllPostsSuc:
      ({ fetchAllPostsSuc }) =>
      () =>
        fetchAllPostsSuc(),
  })
);
export default HomeHOC;

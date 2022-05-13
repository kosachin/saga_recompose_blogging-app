import { connect } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { compose, lifecycle, withHandlers, withProps } from "recompose";
import { fetchPosts, fetchPostsReq } from "../redux/actions";

const postEnhancer = compose(
  connect(
    (store) => ({
      posts: store.posts,
      loading: store.loading,
    }),
    (dispatch) => ({
      fetchAllPostsReq: () => dispatch(fetchPostsReq()),
      fetchAllPostsSuc: () => dispatch(fetchPosts()),
    })
  ),
  withHandlers({
    handleFetchAllPostsReq:
      ({ fetchAllPostsReq }) =>
      () =>
        fetchAllPostsReq(),
    handleFetchAllPostsSuc:
      ({ fetchAllPostsSuc }) =>
      () =>
        fetchAllPostsSuc(),
  }),
  withProps(() => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    return { navigate, searchParams };
  }),
  lifecycle({
    componentDidMount() {
      const {
        handleFetchAllPostsReq,
        handleFetchAllPostsSuc,
        searchParams,
        navigate,
      } = this.props;

      // navigate("?pg=1");
      handleFetchAllPostsReq();
      handleFetchAllPostsSuc();
    },
  })
);
export default postEnhancer;

import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPosts } from "../redux/actions";
import {
  compose,
  lifecycle,
  withHandlers,
  withProps,
  withState,
} from "recompose";
import { findOnePostById } from "../utils/findOnePostId";

const PostEnhancer = compose(
  withState("post", "setPost", {}),
  connect(
    (store) => ({
      posts: store.posts,
    }),
    (dispatch) => ({
      fetchAllPostsSuc: () => dispatch(fetchPosts()),
    })
  ),
  withHandlers({
    handleFetchAllPostsSuc:
      ({ fetchAllPostsSuc }) =>
      () =>
        fetchAllPostsSuc(),
  }),
  withProps(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    return { id, navigate };
  }),
  lifecycle({
    componentDidMount() {
      const { id, setPost, handleFetchAllPostsSuc, posts } = this.props;
      handleFetchAllPostsSuc();
      setPost(() => findOnePostById(id, posts));
    },
  })
);
export default PostEnhancer;

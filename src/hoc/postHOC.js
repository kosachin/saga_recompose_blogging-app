import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchOnePost,
  fetchOnePostReq,
  removeOnePostSuc,
} from "../redux/actions";
import { compose, lifecycle, withHandlers, withProps } from "recompose";

const PostEnhancer = compose(
  connect(
    (store) => ({
      post: store.currPost,
      loading: store.loading,
    }),
    (dispatch) => ({
      fetchOnePostReq: () => dispatch(fetchOnePostReq()),
      fetchOnePostSuc: (id) => dispatch(fetchOnePost(id)),
      removeOnePostSuc: () => dispatch(removeOnePostSuc()),
    })
  ),
  withHandlers({
    handleFetchOnePostReq:
      ({ fetchOnePostReq }) =>
      () =>
        fetchOnePostReq(),
    handleFetchOnePostSuc:
      ({ fetchOnePostSuc }) =>
      (id) =>
        fetchOnePostSuc(id),
    handleRemoveOnePostSuc:
      ({ removeOnePostSuc }) =>
      () =>
        removeOnePostSuc(),
  }),
  withProps(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    return { id, navigate };
  }),
  lifecycle({
    componentDidMount() {
      const { id, handleFetchOnePostSuc, handleFetchOnePostReq } = this.props;
      handleFetchOnePostReq();
      handleFetchOnePostSuc(id);
    },
  })
);
export default PostEnhancer;

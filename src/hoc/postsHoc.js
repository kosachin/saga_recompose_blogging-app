import { connect } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { compose, withHandlers, withProps } from "recompose";
import {
  deleteOnePost,
  deleteOnePostReq,
  fetchOnePost,
  fetchOnePostReq,
} from "../redux/actions";

const postEnhancer = compose(
  connect(
    (store) => ({
      posts: store.posts,
      loading: store.loading,
    }),
    (dispatch) => ({
      deleteOnePostLoading: (id) => dispatch(deleteOnePostReq(id)),
      deleteOnePost: (id) => dispatch(deleteOnePost(id)),
      fetchOnePostReq: () => dispatch(fetchOnePostReq()),
      fetchOnePostSuc: (id) => dispatch(fetchOnePost(id)),
    })
  ),
  withHandlers({
    handleDeleteOneLoading:
      ({ deleteOnePostLoading }) =>
      (id) =>
        deleteOnePostLoading(id),
    handleDeleteOnePost:
      ({ deleteOnePost }) =>
      (id) =>
        deleteOnePost(id),
    handleFetchOnePostReq:
      ({ fetchOnePostReq }) =>
      () =>
        fetchOnePostReq(),
    handleFetchOnePostSuc:
      ({ fetchOnePostSuc }) =>
      (id) =>
        fetchOnePostSuc(id),
  }),
  withProps(() => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    return { navigate, searchParams };
  })
);
export default postEnhancer;

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compose, withHandlers, withProps } from "recompose";
import { addOnePost } from "../redux/actions";

const PostFormHOC = compose(
  connect(
    (store) => ({
      total: store.meta.total,
    }),
    (dispatch) => ({
      addOnePostSuc: (payload) => dispatch(addOnePost(payload)),
    })
  ),
  withProps(() => {
    const navigate = useNavigate();
    return { navigate };
  }),
  withHandlers({
    handleAddOnePostSuc:
      ({ addOnePostSuc }) =>
      (payload) =>
        addOnePostSuc(payload),
  })
);
export default PostFormHOC;

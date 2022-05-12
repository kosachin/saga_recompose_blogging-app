import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose, lifecycle, withHandlers, withProps } from "recompose";
import { findOnePostReq } from "../redux/actions";
import { findOnePostById } from "../utils/findOnePostId";

const PostEnhancer = compose(
  connect((store) => ({
    posts: store.posts,
    store: store,
  })),
  withProps(() => {
    const { id } = useParams();
    let post;
    return { id, post };
  }),

  lifecycle({
    componentDidMount() {
      const { post, id, posts } = this.props;
      console.log(posts, id);
      console.log(findOnePostById(id, posts));
      //   post = findOnePostById(id, posts);
    },
  })
);
export default PostEnhancer;

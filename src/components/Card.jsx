import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";
const Post = ({ post }) => {
  const { delPost } = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => delPost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted by <b>{post.reaction}</b> people!
        </div>
      </div>
    </div>
  );
};

export default Post;

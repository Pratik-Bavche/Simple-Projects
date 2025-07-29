import { useContext } from "react";
import Post from "./Card";
import { PostList as PostListData } from "../store/Post-list-store";
const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;

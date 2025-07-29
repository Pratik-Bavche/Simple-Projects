import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  delPost: () => {},
});

const postListReducer = (curPostList, action) => {
  let newPostList = curPostList;
  if (action.type === "DELETE_POST") {
    newPostList = curPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...curPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, Reactions, tags) => {
    dispatch({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: Reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const delPost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, delPost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go To Sambhajinagar",
    body: "Hello Friends, I am go to Sambhajinagar for my vacations",
    reaction: 5,
    userId: "user-9",
    tags: ["City", "Vacation", "Enjoy"],
  },
  {
    id: "2",
    title: "Finally!! Passed",
    body: "Without study haahaaa",
    reaction: 3,
    userId: "user-14",
    tags: ["Exam", "Passed", "Study", "Graduate"],
  },
];

export default PostListProvider;

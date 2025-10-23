import PostForm from "../components/PostForm";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostEdit: React.FC<Props> = ({ posts, setPosts }) => {
  return <PostForm posts={posts} setPosts={setPosts} />;
};

export default PostEdit;

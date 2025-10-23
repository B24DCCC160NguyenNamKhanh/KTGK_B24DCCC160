import { Post } from "../types/Post";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostDetail: React.FC<Props> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <div>Bài viết không tồn tại</div>;
  }

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== post.id));
      navigate("/");
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <h2>{post.title}</h2>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><b>Ngày đăng:</b> {post.date}</p>
      <p><b>Thể loại:</b> {post.category}</p>
      <img src={post.thumbnail} alt={post.title} style={{ width: "100%", maxHeight: 300, objectFit: "cover" }} />
      <p style={{ whiteSpace: "pre-wrap", marginTop: 20 }}>{post.content}</p>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => navigate("/")}>Quay lại</button>{" "}
        <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>{" "}
        <button onClick={handleDelete}>Xóa bài viết</button>
      </div>
    </div>
  );
};

export default PostDetail;

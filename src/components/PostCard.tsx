import { Post } from "../types/Post";
import { useNavigate } from "react-router-dom";

interface Props {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<Props> = ({ post, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      onDelete(post.id);
    }
  };

  return (
    <div className="post-card" style={{border: '1px solid #ccc', padding: 5, borderRadius: 5, width: 300, marginBottom: 20}}>
      <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 5 }} />
      <h3>{post.title}</h3>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><b>Ngày:</b> {post.date}</p>
      <p>{post.content.slice(0, 100)}...</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
        <button onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  );
};

export default PostCard;

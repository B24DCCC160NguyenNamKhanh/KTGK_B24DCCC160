import { Post } from "../types/Post";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList: React.FC<Props> = ({ posts, setPosts }) => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Tổng số bài viết: {filteredPosts.length}</h2>
      <input
        type="text"
        placeholder="Tìm kiếm theo tiêu đề..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: 20, padding: 8, width: "100%" }}
      />
      <button onClick={() => navigate("/create")} style={{ marginBottom: 20 }}>
        + Viết bài mới
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {filteredPosts.map((p) => (
          <PostCard key={p.id} post={p} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;

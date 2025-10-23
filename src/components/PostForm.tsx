import { Post } from "../types/Post";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostForm: React.FC<Props> = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const editing = Boolean(id);

  const existingPost = posts.find((p) => p.id === Number(id));

  const [form, setForm] = useState<Post>(
    existingPost || {
      id: Date.now(),
      title: "",
      author: "",
      thumbnail: "",
      content: "",
      category: "Khác",
      date: "",
    }
  );

  useEffect(() => {
    if (existingPost) setForm(existingPost);
  }, [existingPost]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.title.length < 10 || form.author.length < 3 || form.content.length < 50) {
      alert("Vui lòng nhập đầy đủ và đúng yêu cầu!");
      return;
    }

    if (editing) {
      setPosts(posts.map((p) => (p.id === form.id ? form : p)));
      alert("Cập nhật thành công!");
      navigate(`/posts/${form.id}`);
    } else {
      const newPost = { ...form, date: new Date().toISOString().split("T")[0] };
      setPosts([...posts, newPost]);
      alert("Đăng bài thành công!");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "auto" }}>
      <h2>{editing ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Tiêu đề"
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Tác giả"
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <input
        name="thumbnail"
        value={form.thumbnail}
        onChange={handleChange}
        placeholder="URL ảnh thumbnail"
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Nội dung bài viết..."
        rows={10}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      >
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="submit">{editing ? "Cập nhật" : "Đăng bài"}</button>
        <button
          type="button"
          onClick={() => navigate(editing ? `/posts/${form.id}` : "/")}
        >
          Hủy
        </button>
      </div>
    </form>
  );
};

export default PostForm;

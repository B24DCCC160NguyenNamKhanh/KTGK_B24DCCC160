import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostEdit from "./pages/PostEdit";
import PostForm from "./components/PostForm";
import { useState } from "react";
import { Post } from "./types/Post";

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Công nghệ AI và tương lai",
      author: "Nguyễn Nam Khánh",
      thumbnail: "https://picsum.photos/300/200?random=1",
      content: "Trí tuệ nhân tạo (AI) đang thay đổi thế giới với tốc độ chóng mặt...",
      category: "Công nghệ",
      date: "2025-10-01",
    },
    {
      id: 2,
      title: "Hành trình du lịch Đà Lạt",
      author: "Trần Huy Anh",
      thumbnail: "https://picsum.photos/300/200?random=2",
      content: "Đà Lạt là một trong những điểm đến đẹp nhất Việt Nam...",
      category: "Du lịch",
      date: "2025-09-20",
    },
    {
      id: 3,
      title: "Ẩm thực Việt Nam phong phú",
      author: "Trương Anh Đức",
      thumbnail: "https://picsum.photos/300/200?random=3",
      content: "Ẩm thực Việt Nam nổi tiếng với nhiều món ăn truyền thống...",
      category: "Ẩm thực",
      date: "2025-08-15",
    },
    {
      id: 4,
      title: "Cuộc sống đô thị hiện đại",
      author: "Phạm Ngọc Linh",
      thumbnail: "https://picsum.photos/300/200?random=4",
      content: "Cuộc sống hiện đại mang đến nhiều tiện ích và thách thức...",
      category: "Đời sống",
      date: "2025-07-30",
    },
    {
      id: 5,
      title: "Khám phá công nghệ mới nhất",
      author: "Trần Gia Thái",
      thumbnail: "https://picsum.photos/300/200?random=5",
      content: "Công nghệ mới nhất giúp cải thiện hiệu suất làm việc...",
      category: "Công nghệ",
      date: "2025-06-20",
    },
    {
      id: 6,
      title: "Du lịch bụi khắp Việt Nam",
      author: "Nguyễn Tú Uyên",
      thumbnail: "https://picsum.photos/300/200?random=6",
      content: "Du lịch bụi là trải nghiệm thú vị và đầy khám phá...",
      category: "Du lịch",
      date: "2025-05-10",
    },
  ]);


  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
        <Routes>
          <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
          <Route path="/posts" element={<PostList posts={posts} setPosts={setPosts} />} />
          <Route path="/create" element={<PostForm posts={posts} setPosts={setPosts} />} />
          <Route path="/posts/create" element={<PostForm posts={posts} setPosts={setPosts} />} />
          <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
          <Route path="/posts/edit/:id" element={<PostEdit posts={posts} setPosts={setPosts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

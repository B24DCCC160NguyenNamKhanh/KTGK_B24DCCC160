import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>📝 Blog Manager</div>
      <div className="menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Trang chủ
        </NavLink>
        <button onClick={() => navigate("/create")}>+ Viết bài</button>
      </div>
    </nav>
  );
};

export default Navbar;

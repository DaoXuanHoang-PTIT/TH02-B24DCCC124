import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Weather from "./component/bai1/bai1";
import StudentPage from "./component/bai2/bai2";
import News from "./component/bai3/bai3";

const App = () => {
  const navStyle: React.CSSProperties = { marginRight: 15, textDecoration: "none", color: "#0366d6" };

  return (
    <BrowserRouter>
      <main style={{ padding: 24 }}>
        <h1 style={{ color: "#333" }}>TH02 - React Web Apps (B24DCCC124)</h1>
        <nav style={{ marginBottom: 16 }}>
          <NavLink to="/weather" style={navStyle}>🌤️ Thời tiết</NavLink>
          <NavLink to="/students" style={navStyle}>🎓 Sinh viên</NavLink>
          <NavLink to="/news" style={navStyle}>📰 Tin tức</NavLink>
        </nav>

        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/students/*" element={<StudentPage />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

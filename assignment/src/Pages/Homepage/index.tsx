import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Notfound, Signup } from "..";

const Homepage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Homepage;

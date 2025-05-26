import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/project" element={ <ProjectPage /> } /> */}
        {/* <Route path="/diary" element={ <DiaryPage /> } /> */}
      </Routes>
    </Router>
  );
}
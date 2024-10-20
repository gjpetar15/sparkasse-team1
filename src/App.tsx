import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import UserDashboard from './assets/pages/UserDashboard/UserDashboard';
import CoursesDashboard from './assets/pages/CoursesDashboard/CoursesDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-dashboard/main-panel" element={<UserDashboard />} />
        <Route path="/courses-dashboard/main-panel" element={<CoursesDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
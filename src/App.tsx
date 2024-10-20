import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import UserDashboard from './assets/pages/UserDashboard/UserDashboard';
import LessonPage from './assets/pages/LessonPage/LessonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-dashboard/main-panel" element={<UserDashboard />} />
        <Route path='/courses/:courseId/lesson/:lessonId' element={<LessonPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

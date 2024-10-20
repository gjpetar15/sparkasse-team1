import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import CoursesDetailsPage from './assets/pages/CoursesDetailsPage/CoursesDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CoursesDetails" element={<CoursesDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

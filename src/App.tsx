import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import AdminPageMain from './assets/pages/AdminPage/AdminDashboardMain';
import AdminPageStatistics from './assets/pages/AdminPage/AdminDashboardStatistics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adminMain" element={<AdminPageMain />} />
        <Route path="/adminStatistics" element={<AdminPageStatistics />} />
      </Routes>
    </Router>
  );
}

export default App;

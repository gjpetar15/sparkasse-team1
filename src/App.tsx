import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import UserDashboard from './assets/pages/UserDashboard/UserDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-dashboard/main-panel" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

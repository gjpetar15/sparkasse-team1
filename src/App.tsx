import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import SignInPage from './assets/pages/SignInPage/SignInPage';
import Registration from './assets/pages/RegistrationPage/Registration';
import Quiz from './assets/components/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </Router>
  );
}

export default App;

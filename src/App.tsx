import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from '../src/components/RegistartionForm';
import TeamPage from '../src/pages/TeamPage';
import UserDetail from '../src/components/UserDetail';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="login" element={<Login />} />
        <Route path="user/:userId" element={<UserDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

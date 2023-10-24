import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from '../src/components/RegistartionForm';
import TeamPage from '../src/pages/TeamPage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

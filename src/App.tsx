import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from '/src/components/RegistartionForm';
import TeamPage from '/src/pages/TeamPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import ProjectListPage from './pages/ProjectListPage';
import SingleProjectPage from './pages/SingleProjectPage';
import Navbar from './components/Navbar';
import AddProject from './pages/AddProject';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>homepage</h1>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/project-list" element={<ProjectListPage />} />
        <Route path="/project/create" element={<AddProject />} />
        <Route path="/project/:projectId" element={<SingleProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;

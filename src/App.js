import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import ProjectListPage from './pages/ProjectListPage';
import SingleProjectPage from './pages/SingleProjectPage';
import Navbar from './components/Navbar';
import AddProject from './pages/AddProject';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>homepage</h1>} />
        <Route path="/signup" element={
          <IsAnon>
            <SignupPage />
          </IsAnon>
        } />
        <Route path="/login" element={
          <IsAnon>
            <LoginPage />
          </IsAnon>
        } />
        <Route path="/project-list" element={
          <IsPrivate>
            <ProjectListPage />
          </IsPrivate>
        } />
        <Route path="/project/create" element={
          <IsPrivate>
            <AddProject />
          </IsPrivate>
        } />
        <Route path="/project/:projectId" element={
          <IsPrivate>
            <SingleProjectPage />
          </IsPrivate>
        } />
      </Routes>
    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/project-list">Project List</Link>
      <Link to="/project/create">Add Project</Link>
    </nav>
  );
}

export default Navbar;
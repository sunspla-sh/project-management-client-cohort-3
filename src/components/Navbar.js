import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar(){

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      { isLoggedIn && (
        <>
          <Link to="/project-list">Project List</Link>
          <Link to="/project/create">Add Project</Link>
          <button
            onClick={logOutUser}
          >Logout</button>
        </>
      )}
      { user && (
        <p>
          Hey, {user.username}!
        </p>
      )}
      { !isLoggedIn && (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
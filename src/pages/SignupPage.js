import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage(){

  const navigate = useNavigate()

  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const updateState = event => setState({
    ...state,
    [event.target.name]: event.target.value
  });

  const handleSubmit = event => {
    event.preventDefault();

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, state)
      .then(res => {
        console.log(res.data);
        navigate('/login')
      })
      .catch(err => console.log(err))

  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username
          </label>
          <input
            name="username"
            value={state.username}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Password
          </label>
          <input
            name="password"
            type="password"
            value={state.password}
            onChange={updateState}
          />
        </div>
        <div>
          <button>
            Sign Up!
          </button>
        </div>
      </form>
    </div>
  );

}

export default SignupPage;
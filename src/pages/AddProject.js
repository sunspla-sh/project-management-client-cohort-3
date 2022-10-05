import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProject(){

  const navigate = useNavigate()

  const [state, setState] = useState({
    title: '',
    description: ''
  });

  const updateState = event => setState({
    ...state,
    [event.target.name]: event.target.value
  });

  const handleSubmit = event => {
    event.preventDefault();
    const storedToken = localStorage.getItem('authToken');
    axios.post(`http://localhost:3001/api/projects`, state, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => {
        console.log(res.data);
        navigate('/project-list');
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Add a new project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title
          </label>
          <input
            name="title"
            value={state.title}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Description
          </label>
          <input
            name="description"
            value={state.description}
            onChange={updateState}
          />
        </div>
        <div>
          <button>
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
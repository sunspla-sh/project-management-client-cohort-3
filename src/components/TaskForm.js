import { useState } from 'react';
import axios from 'axios';

function TaskForm(props){

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
    const taskObject = {
      ...state,
      projectId: props.projectId
    };
    axios.post('http://localhost:3001/api/tasks', taskObject, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(res => {
        console.log(res.data);
        props.getSingleProject(props.projectId);
        setState({
          title: '',
          description: ''
        });
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h3>Add a new Task to the Project</h3>
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
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

function SingleProjectPage(){

  const navigate = useNavigate();

  const { projectId } = useParams();

  const [singleProject, setSingleProject] = useState(null);

  console.log(projectId);

  const getSingleProject = projectId => {

    const storedToken = localStorage.getItem('authToken');

    axios.get(`http://localhost:3001/api/projects/${projectId}`, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => setSingleProject(res.data.project))
      .catch(err => console.log(err))
  };

  const deleteSingleProject = projectId => {
    const storedToken = localStorage.getItem('authToken');
    axios.delete(`http://localhost:3001/api/projects/${projectId}`, {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
    })
      .then(res => {
        console.log(res);
        navigate('/project-list');
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getSingleProject(projectId);
  }, [projectId])

  return (
    <div>
      {singleProject && (
        <>
          <div>
            <h2>Title: {singleProject.title}</h2>
            <p>Description: {singleProject.description}</p>
            {singleProject.tasks.map(element => {
              return (
                <div>Task: {element.title}</div>
              );
            })}
          </div>
          <TaskForm projectId={projectId} getSingleProject={getSingleProject} />
          <div>
            <h3>WARNING: DANGER BELOW</h3>
            <button
              onClick={() => deleteSingleProject(projectId)}
            >
              Delete Project
            </button>
          </div>
        </>
      )} 
    </div>
  );
}

export default SingleProjectPage;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProjectListPage(){

  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {

    const storedToken = localStorage.getItem('authToken');

    axios.get('http://localhost:3001/api/projects',
     {
      headers: {
        authorization: `Bearer ${storedToken}`
      }
     })
      .then(res => setProjectsArray(res.data.projects))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {projectsArray.map(element => {
        return (
          <div key={element._id}>
            <h3>Title: {element.title}</h3>
            <p>Description: {element.description}</p>
            <Link to={`/project/${element._id}`} >View Project</Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectListPage;
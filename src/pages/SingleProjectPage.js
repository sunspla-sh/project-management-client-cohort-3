import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleProjectPage(){

  const { projectId } = useParams();

  const [singleProject, setSingleProject] = useState(null);

  console.log(projectId);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/projects/${projectId}`)
      .then(res => setSingleProject(res.data.project))
      .catch(err => console.log(err))
  }, [projectId])

  return (
    <div>
      {singleProject && (
        <div>
          <h2>Title: {singleProject.title}</h2>
          <p>Description: {singleProject.description}</p>
          {singleProject.tasks.map(element => {
            return (
              <div>Task: {element.title}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SingleProjectPage;
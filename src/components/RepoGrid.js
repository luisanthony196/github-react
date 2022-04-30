import React, { useEffect, useState } from 'react';
import Repo from './Repo';
import reposService from '../services/repos';

function RepoGrid() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await reposService.getAll();
      setRepos(data);
      console.log(data);
    }
    getData();
  }, [setRepos]);

  return (
    <>
      <div>
        <h1>Repositorios</h1>
      </div>
      <div className="row">
        {repos.map((r) => (
          <Repo key={r.id} dataRepo={r} />
        ))}
      </div>
    </>
  );
}

export default RepoGrid;

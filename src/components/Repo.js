import React, { useEffect, useState } from 'react';
import getColor from '../helpers/color';
import reposService from '../services/repos';

function Repo({ dataRepo }) {
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = dataRepo.collaborators_url.replace(/\{\/\w+\}/, '');
      const { data } = await reposService.getCollaborators(url);
      console.log(data);
      setCollaborators(data);
    }
    getData();
  }, [dataRepo]);

  function showData(leftUsers) {
    console.log(leftUsers);
  }

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-light mb-4" id="repo">
        <div className="card-header pt-4">
          <h5 className="card-title mb-0">{dataRepo.name}</h5>
          <div className={`badge my-2 ${getColor(dataRepo.language)}`}>{dataRepo.language}</div>
        </div>
        <div className="card-body pt-0">
          <h6 className="card-subtitle text-muted">{dataRepo.owner.login}</h6>
          <p className="card-text p-y-1">
            {dataRepo.description
              ? dataRepo.description
              : <i>No description</i>}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="members">
              {collaborators.slice(0, 3).map((c) => (
                <button className="member" type="button" key={c.id}>
                  <img
                    className="member-avatar"
                    title={c.login}
                    alt="Avatar"
                    // key={c.id}
                    src={c.avatar_url}
                  />
                </button>
              ))}
            </div>
            {collaborators.length > 3 && (
              <button
                className="member-count"
                type="button"
                onClick={() => showData(collaborators.slice(3, collaborators.length))}
              >
                {`+${collaborators.length - 3}`}
              </button>
            )}
          </div>
          <a href={dataRepo.html_url} className="float-end btn btn-outline-primary">Go to</a>
        </div>
      </div>
    </div>
  );
}

export default Repo;

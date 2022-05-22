import React from 'react';
import Popover from './Popover';
import getColor from '../helpers/color';
import useAxios from '../hooks/useAxios';

function Repo({ dataRepo, popover, setPopover }) {
  const {
    response: collaborators,
    loading,
  } = useAxios(`/repos/${dataRepo.full_name}/collaborators`);

  function showData() {
    setPopover(dataRepo.id);
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
          {loading ? (
            <span>Loading</span>
          ) : (
            <div className="d-flex align-items-center">
              <div className="members">
                {collaborators.slice(0, 3).map((c) => (
                  <a className="member" href={c.html_url} key={c.id} target="_blank" rel="noopener noreferrer">
                    <img
                      className="member-avatar"
                      title={c.login}
                      alt="Avatar"
                      src={c.avatar_url}
                    />
                  </a>
                ))}
              </div>
              {collaborators.length > 3 && (
                <button
                  className="member-count"
                  type="button"
                  onClick={() => showData()}
                >
                  {`+${collaborators.length - 3}`}
                </button>
              )}
              {popover === dataRepo.id && (
                <Popover collaborators={collaborators} setPopover={setPopover} />
              )}
            </div>
          )}
          <a href={dataRepo.html_url} className="float-end btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
            Go to
          </a>
        </div>
      </div>
    </div>
  );
}

export default Repo;

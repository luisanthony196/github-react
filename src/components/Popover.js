import React, { useEffect, useRef } from 'react';

// function useOutsideAlerter(ref, setPopover) {
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         setPopover(-1);
//       }
//     }
//     // Bind the event listener
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [ref, setPopover]);
// }

function Popover({ collaborators, setPopover }) {
  const wrapeRef = useRef(null);
  // useOutsideAlerter(wrapeRef, setPopover);
  useEffect(() => {
    const handleClickOutside = ((e) => {
      if (wrapeRef.current && !wrapeRef.current.contains(e.target)) {
        setPopover(-1);
      }
    });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div id="popover" ref={wrapeRef} className="bg-white border-primary rounded-3">
      <div className="members">
        {collaborators.slice(3, collaborators.length).map((c) => (
          <a className="member" href={c.html_url} key={c.id} target="_blank" rel="noopener noreferrer">
            <img
              className="member-avatar"
              title={c.login}
              alt="Avatar"
              // key={c.id}
              src={c.avatar_url}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Popover;

import React from 'react';

export default ({ firstName, lastName, address, company }) => {
  return (
    <div className="card card-saved">
      <h3 className="saved">First Name:</h3>
      <p>{firstName ? firstName : 'Empty'}</p>
      <h3 className="saved">Last Name:</h3>
      <p>{lastName ? lastName : 'Empty'}</p>
      <h3 className="saved">Address:</h3>
      <p>{address ? address : 'Empty'}</p>
      <h3 className="saved">Company:</h3>
      <p>{company ? company : 'Empty'}</p>
    </div>
  );
};

import React from 'react';
import Email from 'components/Email';
import Phone from 'components/Phone';


const Client = ({ data }) => {
  const { firstName, lastName, job, photo, phone } = data;

  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img alt="profil" className="card-img-top" src={photo}/>
        <div className="card-body">
          <h3 className="card-text">{firstName} {lastName}</h3>
          <h5>{job}</h5>
          <div className="d-flex justify-content-between">
          <Email firstName={firstName} lastName={lastName}/>
          <Phone phone={phone}/>
          </div>
        </div>
      </div>
    </div>
    );
};


export default Client;

import React from 'react';

const Email = (props) => (
  <a className="btn btn-primary" href={`mailto:${props.lastName}.${props.firstName}@gmail.com`}>Envoyer un e-mail</a>
);

export default Email

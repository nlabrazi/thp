import React from 'react';
import faker from 'faker';
import Client from 'components/Client';


const Clients = () => {
  const clientsList = Array.from({ length: 5 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber('06########'),
    mail: faker.internet.email(),
    job: faker.name.jobTitle(),
    photo: faker.image.people(),
  }));

  console.log(clientsList);

  return (
    <React.Fragment>
      {clientsList.map((clientData) => (
        <Client data={clientData} key={clientData.id} />
      ))}
    </React.Fragment>
  );
};

export default Clients;

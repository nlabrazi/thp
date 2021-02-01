import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clients from 'components/Clients';


const App = () => (
  <div className="album py-5 bg-light">
    <div className="container">
      <div className="row">
        <Clients />
      </div>
    </div>
  </div>
  );


ReactDOM.render(<App />, document.getElementById('root'));

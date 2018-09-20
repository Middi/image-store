import React from 'react';
import './Home.css';
import { UploadForm } from '../../components/UploadForm';

const Home = props => {
  console.log(props);
  return (
    <div>
      <h3>Home View</h3>
      <UploadForm />
    </div>
  );
};

export default Home;

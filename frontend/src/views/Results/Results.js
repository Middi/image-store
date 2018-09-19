import React from 'react';
import { ListView } from '../../components/ListView';

const Results = props => {
  console.log(props);
  return (
    <div>
      <h3>Results View</h3>
      <ListView />
    </div>
  );
};

export default Results;

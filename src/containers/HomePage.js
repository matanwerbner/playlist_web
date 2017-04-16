import React from 'react';
import {Link} from 'react-router';
import TilesData from '../components/PlList/fixtures';
import PlList from '../components/PlList';
const HomePage = () => {
  return (
    <div>
      <PlList items={TilesData} />
    </div>
  );
};

export default HomePage;

import React from 'react';
import './PlList.scss';
import PlItem from './plListItem';
const PlList = ({items}) => (
  <div className="plList-container">
    {
      items.map(
        item => <PlItem key={item.id} item={item}/>)
    }
  </div>
);

export default PlList;
import React from 'react';
import './plItem.scss';
import {Link} from 'react-router';

import { BtnIconPlay } from '../../iconButtons'
import {IconFavorite, IconPlay} from '../../icons/';
import PropTypes from 'prop-types';

const PlItem = ({item}) => (
  <div
    className="plList-item-container"
    style={{
    backgroundImage: `url(/images/${item.img})`
  }}>
    <div className="plList-item-title">
      {item.title}
    </div>
    <div className="plList-item-stats">
      <span>
      
        <IconFavorite/> {item.likes}</span>
      <span>
      
        <IconPlay/> {item.played}
      </span>
      <div>{ item.user }</div>
    </div>
    <div className="plList-item-mask">

      <div className="plList-item-play">
       <Link to={`/playlist/${item.id}`}>
       <BtnIconPlay />
       </Link>
        
      </div>
    </div>
  </div>
);

PlItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default PlItem;

import React from 'react';
import './plItem.scss';
import { BtnIconPlay } from '../../iconButtons'
import {IconFavorite, IconPlay} from '../../icons/';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
        <BtnIconPlay />
      </div>
    </div>
  </div>
);

PlItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default PlItem;

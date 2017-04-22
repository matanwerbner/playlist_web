import React from 'react';
import './topMenu.scss';
import {BtnIconAdd} from '../iconButtons';
import {Link} from 'react-router';

const AppBarExampleIcon = () => (
  <div className="top-menu">
    <img src="/images/playlist-logo.png" alt=""/>
    <Link to={`/new/`}>
      <BtnIconAdd label="פלייליסט חדש"/>
    </Link>
  </div>
);

export default AppBarExampleIcon;
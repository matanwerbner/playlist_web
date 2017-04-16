import React from 'react';
import './topMenu.scss';
import {BtnIconAdd} from '../iconButtons';

const AppBarExampleIcon = () => (
  <div className="top-menu">
    <img src="/images/playlist-logo.png" alt=""/>
    <BtnIconAdd label="פלייליסט חדש"/>
  </div>
);

export default AppBarExampleIcon;
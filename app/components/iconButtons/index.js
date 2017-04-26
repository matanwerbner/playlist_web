import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const toFloatingActionBtn = (elem, onClick) => (
  <FloatingActionButton mini={ true } secondary={ true } onClick={ onClick } >
    {elem}
  </FloatingActionButton>
)

const toRaisedButton = (label, icon, onClick) => (
  <RaisedButton
      onClick={ onClick }
      label={ label }
      secondary={true}
      icon={ icon }
    />
)

const toTransparentButton = (icon, onClick) => (
  <span onClick={onClick} className="transparentButton" >
  { icon }
  </span>
)

export const BtnIconClear = ({ onClick }) => toTransparentButton(<i onClick={ onClick } className="material-icons clear">clear</i>);


export const BtnIconPlay = () => toFloatingActionBtn(
  <i className="material-icons play">play_arrow</i>
)

export const BtnIconAdd = ({ label, onClick }) => toRaisedButton(
  label,
  <i className="material-icons add">add</i>,
  onClick
)


import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const toFloatingActionBtn = (elem) => (
  <FloatingActionButton mini={ true } secondary={ true }>
    {elem}
  </FloatingActionButton>
)

const toRaisedButton = (lable, icon) => (
  <RaisedButton
      label={ lable }
      secondary={true}
      icon={ icon }
    />
)

export const BtnIconPlay = () => toFloatingActionBtn(
  <i className="material-icons play">play_arrow</i>
)

export const BtnIconAdd = ({ label }) => toRaisedButton(
  label,
   <i style={{ color: 'white', margin: '0px 12px 0px 0px' }} className="material-icons add">add</i>
);
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const toFloatingActionBtn = (elem) => (
  <FloatingActionButton mini={ true } secondary={ true }>
    {elem}
  </FloatingActionButton>
)

const toRaisedButton = (label, icon) => (
  <RaisedButton
      label={ label }
      secondary={true}
      icon={ icon }
    />
)

export const BtnIconPlay = () => toFloatingActionBtn(
  <i className="material-icons play">play_arrow</i>
)

export const BtnIconAdd = ({ label }) => toRaisedButton(
  label,
  <i className="material-icons add">add</i>
)


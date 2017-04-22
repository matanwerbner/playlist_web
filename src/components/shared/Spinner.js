import React from 'react';

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
}

export default() => (
  <div style={style} className="spinnerContainer">
    <img src="/images/spinner.svg"/>
  </div>
)
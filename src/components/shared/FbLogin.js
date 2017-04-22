import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {fbAppId} from '../../constants/consts';

export default({callback}) => (<FacebookLogin
  appId={fbAppId}
  autoLoad={true}
  fields="name,email,picture"
  callback={callback}/>)

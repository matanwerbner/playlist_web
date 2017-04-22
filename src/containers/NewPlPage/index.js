import React, {Component} from 'react';
import {connect} from 'react-redux';
import FbLogin from '../../components/shared/FbLogin';
import './NewPlPage.scss';
import * as LoginActions from '../../redux/loggedInUser';
import {get} from 'lodash';
import Spinner from '../../components/shared/Spinner';
import PlaylistForm from './playlistForm';
class NewPlPage extends Component {
  componentWillMount() {
    this.props.LoginRequest();
  }
  render() {
    const {loggedInUser, loginPending} = this.props;
    const loginButton = (<FbLogin
          callback={response => this
          .props
          .LoginSuccess(response)}/>)

    return (
      <div className="newPlPageContainer">
        {!loggedInUser && !loginPending && loginButton }
        {this.props.loginPending && <Spinner/>}
        {loggedInUser && <PlaylistForm />}
      </div>
    )
  }
}

const mapStateToProps = ({loggedInUser}) => ({
  loginPending: get(loggedInUser, 'pending'),
  loggedInUser: get(loggedInUser, 'data')
});

export default connect(mapStateToProps, LoginActions)(NewPlPage);
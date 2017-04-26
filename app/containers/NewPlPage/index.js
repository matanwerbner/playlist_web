import React, {Component} from 'react';
import {connect} from 'react-redux';
import FbLogin from '../../components/shared/FbLogin';
import './NewPlPage.scss';
import * as LoginActions from '../../redux/loggedInUser';
import {get} from 'lodash';
import Spinner from '../../components/shared/Spinner';
import PlaylistForm from './playlistForm';
import PlaylistPreview from './playlistPreview';
class NewPlPage extends Component {
  
  constructor() {
    super()
    this.state = {};
    this.loadPreview = this.loadPreview.bind(this);
  }

  componentWillMount() {
    this.props.LoginRequest();
  }

  loadPreview(previewVideoId) {
    this.setState(Object.assign({}, this.state, { previewVideoId }))
  }

  render() {
    const {loggedInUser, loginPending} = this.props;
    const loginButton = (<FbLogin
          callback={response => this
          .props
          .LoginSuccess(response)}/>)
    const isReady = loggedInUser;
    return (
      <div className="newPlPageContainer">
        {!loggedInUser && !loginPending && loginButton }
        {this.props.loginPending && <Spinner/>}
        { 
          isReady && 
          <div className="newPlInnerContainer">
            <PlaylistForm onLoadPreview={ this.loadPreview } />
            <PlaylistPreview previewVideoId={this.state.previewVideoId} />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({loggedInUser}) => ({
  loginPending: get(loggedInUser, 'pending'),
  loggedInUser: get(loggedInUser, 'data')
});

export default connect(mapStateToProps, LoginActions)(NewPlPage);
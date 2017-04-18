import React, {Component} from 'react';
import Playlists from './Pl.fixture';
import PlTracksList from './PlTracksList';
import PlTrackPlayer from './PlTrackPlayer';
import './PlPage.style.scss';
export default class PlPage extends Component {

  constructor() {
    super();
    this.state = {
      playlist: null,
      currentTrackIdx: 0
    };
  }

  componentDidMount() {
    this.setState({
      playlist: Playlists.find(p => p.id == this.props.params.PlId)
    });
  }

  render() {
    if (!this.state.playlist) {
      return <div/>
    }
    const activeTrack = this.state.playlist.tracks[
      this.state.currentTrackIdx
    ];

    return (
      <div className="playlist-container">
        <PlTracksList 
          currentTrackIdx={ this.state.currentTrackIdx }
          tracks={this.state.playlist.tracks}/>

        <div className="playlist-video-container">
          <h1 className="playlist-title-container">
            {this.state.playlist.title}
          </h1>
          <PlTrackPlayer track={ activeTrack } />
        </div>
      </div>

    )
  }
}
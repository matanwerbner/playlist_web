import React from 'react';
import YouTube from 'react-youtube';
import './PlTrackPlayer.scss';
import opts from './PlTrackPlayer.consts';

class PlTrackPlayer extends React.Component {
  render() {
    const { track, onTrackEnded } = this.props;
    return (
      <div className="playlist-track-player-container">
        <YouTube opts={opts} onEnd={onTrackEnded} videoId={track.videoId}/>
      </div>
    )
  }
}

export default PlTrackPlayer;
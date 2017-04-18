import React from 'react';
import YouTube from 'react-youtube';
import './PlTrackPlayer.scss';

export default({track}) => (
  <div className="playlist-track-player-container">
    <YouTube videoId={track.videoId}/>
  </div>
)
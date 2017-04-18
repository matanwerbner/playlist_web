import React from 'react';
import './PlTrackList.scss';

export default({tracks, currentTrackIdx}) => {
  return <div className="playlist-tracks-container">
    {
      tracks.map(
        (t, idx) => 
          <div className={ idx == currentTrackIdx ? 'active' : '' } key={ t.id }>{t.title}</div>
      )
    }
  </div>
}
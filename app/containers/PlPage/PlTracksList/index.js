import React from 'react';
import './PlTrackList.scss';

export default({tracks, currentTrackIdx, onTrackCliked}) => {
  return <div className="playlist-tracks-container">
    {
      tracks.map(
        (t, idx) => 
          <div className={ idx == currentTrackIdx ? 'active' : '' } 
               key={ t.id }
               onClick={ onTrackCliked.bind(this, idx) }>
            {t.title}
          </div>
      )
    }
  </div>
}
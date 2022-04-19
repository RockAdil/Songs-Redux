import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Song Details for:</h3>
      <p>
        Song Name: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapPropsToState = state => {
  return { song: state.selectedSong };
};

export default connect(mapPropsToState)(SongDetail);

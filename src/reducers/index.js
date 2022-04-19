import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'On My Way', duration: '3.00' },
    { title: 'Play Date', duration: '2.20' },
    { title: 'Infinity', duration: '3.32' },
    { title: 'Harelys In Hawaii', duration: '3.40' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

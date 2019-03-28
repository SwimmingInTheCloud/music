const getters={
  currentSong(state){
    let song=state.playList[state.nowIndex];
    return song;
  }
};
export default getters;

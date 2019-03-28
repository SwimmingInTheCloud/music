const mutations={
  addPlayList(state,params){
    state.playList=params.list;
    state.nowIndex=params.index;
  },
  prevSong(state,params){
    if(state.nowIndex===0){
      state.nowIndex=state.playList.length
    }
    state.nowIndex=state.nowIndex-1;
  },
  nextSong(state,params){
    if(state.nowIndex===state.playList.length-1){
      state.nowIndex=-1
    }
    state.nowIndex=state.nowIndex+1;
  }
};
export default mutations

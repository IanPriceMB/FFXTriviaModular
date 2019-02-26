const state = {
  state: {
    level: {
      Besaid: [],
      Luca: [],
      Djose: [],
      ThunderPlains: [],
      Gagazet: [],
      Sin: []
    },
    questionTracker: 0,
    levelTracker: null,
    levelDifficulty: ["very easy", "easy", "medium", "advanced", "expert"]
  },

  updateLevel: function (level, data){
    this.state.level[level] = this.state.level[level].push(data);
  },
  updateQeustionTracker: function (data){
    this.state.questionTracker = data;
  }, 
  updateLevelTracker: function (data){
    this.state.levelTracker = data;
  },
  getState: function () {
    return this.state;
  }
};
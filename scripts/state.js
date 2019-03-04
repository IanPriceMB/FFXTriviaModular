export const state = {
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
  },

  updateLevel: function (level, data){
  this.state.level[level].push(data);
  },

  updateQeustionTracker: function (data){
    switch (data) {
      case 'answered':
      this.state.questionTracker++;
      break;

      case 'resetLevel':
      this.state.questionTracker = 0;
      break;
    }
  }, 

  updateLevelTracker: function (data){
    this.state.levelTracker = data;
  },
  
  getState: function () {
    return this.state;
  }
};
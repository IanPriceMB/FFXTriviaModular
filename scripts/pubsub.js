// This file is the main event handler mechanism

const pubsub = {
  pubsub: {},
  subscribe: function (eventName, fn) {
    this.pubsub[eventName] = this.pubsub[eventName] || [];
    this.pubsub[eventName].push(fn);
  },
  unsubscribe: function(eventName, fn) {
    if (this.pubsub[eventName]) {
      for (let i = 0; i < this.pubsub[eventName].length; i++) {
        if (this.pubsub[eventName][i] === fn) {
          this.pubsub[eventName].splice(i, 1);
          break;
        };
      };
    };
  },
  transmit: function (eventName, data) {
    if (this.pubsub[eventName]) {
      this.pubsub[eventName].forEach(function(fn) {
        fn(data);
      });
    };
  }
};
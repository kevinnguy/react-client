const {
  DetoxCircusEnvironment,
  SpecReporter,
  WorkerAssignReporter,
} = require('detox/runners/jest-circus');

class Environment extends DetoxCircusEnvironment {
  constructor(config) {
    super(config);

    this.initTimeout = 300000;

    this.registerListeners({
      SpecReporter,
      WorkerAssignReporter,
    });
  }
}

module.exports = Environment;

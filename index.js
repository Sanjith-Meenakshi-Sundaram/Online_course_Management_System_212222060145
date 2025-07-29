class Account {
  constructor(userId, fullName, userEmail) {
    this.userId = userId;
    this.fullName = fullName;
    this.userEmail = userEmail;
  }

  signIn() {
    console.log(`${this.fullName} signed in.`);
  }

  getAccountType() {
    return "Account";
  }
}

class Learner extends Account {
  constructor(userId, fullName, userEmail) {
    super(userId, fullName, userEmail);
    this.joinedModules = [];
  }

  getAccountType() {
    return "Learner";
  }

  joinModule(module) {
    this.joinedModules.push(module);
    module.registerLearner(this);
  }

  uploadTask(task, submissionContent) {
    task.receiveSubmission(this, submissionContent);
  }
}

class Trainer extends Account {
  constructor(userId, fullName, userEmail) {
    super(userId, fullName, userEmail);
    this.modulesCreated = [];
  }

  getAccountType() {
    return "Trainer";
  }

  designModule(moduleId, moduleTitle, moduleInfo) {
    const module = new Module(moduleId, moduleTitle, moduleInfo, this);
    this.modulesCreated.push(module);
    return module;
  }

  evaluateTask(task, learner, marks) {
    const result = new Result(task, learner, marks);
    console.log(`${learner.fullName} evaluated with score ${marks}`);
    return result;
  }
}

class Module {
  constructor(moduleId, moduleTitle, moduleInfo, trainer) {
    this.moduleId = moduleId;
    this.moduleTitle = moduleTitle;
    this.moduleInfo = moduleInfo;
    this.trainer = trainer;
    this.tasks = [];
    this.learners = [];
  }

  registerLearner(learner) {
    this.learners.push(learner);
  }

  includeTask(task) {
    this.tasks.push(task);
  }
}

class Task {
  constructor(taskId, taskTitle, deadline) {
    this.taskId = taskId;
    this.taskTitle = taskTitle;
    this.deadline = deadline;
    this.responses = new Map();
  }

  receiveSubmission(learner, submissionContent) {
    this.responses.set(learner, submissionContent);
    console.log(`${learner.fullName} submitted ${this.taskTitle}`);
  }
}

class Result {
  constructor(task, learner, marks) {
    this.task = task;
    this.learner = learner;
    this.marks = marks;
  }
}

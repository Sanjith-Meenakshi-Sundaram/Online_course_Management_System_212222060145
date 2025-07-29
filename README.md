# Online Course Management System - OOP Design

A simulation of a system design interview using Object-Oriented Programming (OOP) principles to model an Online Course Management System with Learners and Trainers.

## UML Class Diagram

<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/b96b7d0a-d89c-4147-8ba8-5f72ddad36a4" />

## Code Implementation

- `Account` (Superclass)
- `Learner`, `Trainer` (Subclass)
- `Module`, `Task`, and `Result` as associative and utility classes
- Demonstrates: Inheritance, Polymorphism (via `getAccountType()`), and Encapsulation

See [`index.js`](./index.js) for full code.

## OOP Principles Applied

**Abstraction:**  
Only key details like module title, description, and participation are exposed.

**Encapsulation:**  
Internal properties such as task submissions and registered learners are handled within the class.

**Inheritance:**  
Learner and Trainer extend the base Account class to reuse sign-in methods and shared functionality.

**Polymorphism:**  
The `getAccountType()` method is overridden in each subclass to reflect the specific role.

## SOLID Principles Followed

- **S (Single Responsibility):** Each class is responsible for one piece of functionality.
- **O (Open/Closed):** The Account class is extendable for new roles (e.g., Admin) without modifying it.
- **L (Liskov Substitution):** All Account subclasses can be used wherever Account is expected.

## Code Implementation

The project includes the following classes:

- `Account` (Superclass)
- `Learner`, `Trainer` (Subclasses of Account)
- `Module` – contains module details, tasks, and registered learners
- `Task` – allows learners to submit their work
- `Result` – stores evaluation information

> The full code is available in [`index.js`](./index.js)

## Code Explanation

This system is modeled using fundamental Object-Oriented Programming principles. The main actors are **Account**, **Learner**, and **Trainer**, and core features revolve around **Modules**, **Tasks**, and **Results**. Below is a breakdown of the implementation:

### 1. `Account` (Base Class)

The `Account` class acts as the **abstract base class** for all users in the system. It includes common properties and behaviors:

```javascript
class Account {
  constructor(userId, fullName, userEmail) { ... }
  signIn() { ... }
  getAccountType() { return "Account"; } 
}
```

Encapsulates: userId, fullName, and userEmail

Polymorphic method: getAccountType() is overridden by subclasses

Defines common method signIn()

---

### 2. `Learner ` (Subclass of Account)

```javascript
class Learner extends Account {
  constructor(...) { ... }
  getAccountType() { return "Learner"; }
  joinModule(module) { ... }
  uploadTask(task, submissionContent) { ... }
}

```

Inherits from Account

Maintains joinedModules

Can join modules and submit tasks

Overrides getAccountType() to identify as "Learner"

---

### 3. `Trainer` (Subclass of Account)

```javascript
class Trainer extends Account {
  constructor(...) { ... }
  getAccountType() { return "Trainer"; }
  designModule(...) { ... }
  evaluateTask(task, learner, marks) { ... }
}

```

Inherits from Account

Maintains modulesCreated

Can create modules and evaluate tasks

Overrides getAccountType() to identify as "Trainer"

---

### 4. `Module` Class

```javascript
class Module {
  constructor(moduleId, moduleTitle, moduleInfo, trainer) { ... }
  registerLearner(learner) { ... }
  includeTask(task) { ... }
}
```

Associated with one trainer and multiple learners

Holds tasks

Functions to register learners and add tasks

---

### 5. `Task` Class

```javascript
class Task {
  constructor(taskId, taskTitle, deadline) { ... }
  receiveSubmission(learner, submissionContent) { ... }
}
```
Represents a single task

Stores submissions using a Map to associate each learner with their submission
---

### 6. `Result` Class

```javascript
class Result {
  constructor(task, learner, marks) { ... }
}

```
Represents the score assigned to a specific learner’s task

Links to the corresponding Task and Learner

---

### Key Features Demonstrated in Code

- **Polymorphism**: `getRole()` behaves differently depending on the actual object (`Student` or `Instructor`)
- **Encapsulation**: Properties like `submissions`, `students`, and `assignments` are private to their class logic
- **Associations**: 
  - A course has many students and assignments
  - An assignment links submissions from many students
  - A grade connects a student to an assignment with a score
- **Reusability via Inheritance**: `Student` and `Instructor` reuse login and user data via `User` base class

---

### How You Can Extend This Code

- Add **Admin** role by extending `User`
- Use **interfaces** (via TypeScript or an interface pattern) to enforce structure
- Implement **data validation** using setters
- Store data with a database or file system
- Add **feedback** or **comments** to grades

---

OOP Principles Applied
Abstraction
Only essential features are exposed (e.g., receiveSubmission() hides how data is stored internally).

Encapsulation
Internal data like responses or registered learners are not accessed directly from outside.

Inheritance
Learner and Trainer inherit from Account, reusing sign-in and identity logic.

Polymorphism
getAccountType() is overridden by both Learner and Trainer to define specific behavior.

SOLID Principles Followed
S (Single Responsibility): Each class handles a single concern.

O (Open/Closed): Easily extendable for new roles (e.g., Admin) without modifying existing logic.

L (Liskov Substitution): You can substitute Account references with Learner or Trainer.

(I & D are more applicable in interface-based/DI heavy architectures but can be added later.)
# :vertical_traffic_light: Branching Strategy

This document will cover the Branching Strategy and Development Workflow that must be followed while working on Black Mesa projects. These are designed to ensure speedy development while minimizing the potential of bugs and defects making their way to the master branch.

This branching strategy is based on Feature Isolation, using three distinct branches.
---

## Branches Overview

### Master

Here is where all of the working, deployed production code should live. Only code that has been **peer-reviewed and QA Tested** on a *Staging* branch should be merged to master after being approved.

### Feature Branch Folder

When Working on a new task or feature, a new branch should be cut from the current Master branch and saved into a master /Feature branch folder. This will allow for Feature branches to be easily grouped and found.

### Staging

Staging branches will be cut from *Master* at the beginning of a *sprint* and should be pre-fixed with the sprint number or date. As your individual features pass **Code Review** you will merge them to the current Staging Branch for **QA** testing.

### Fixes

Fix Branches should be cut from the current Staging branch that has a bug or QA Defect and merged back to that same Staging branch for further QA testing.

---

# Branch | Development Workflow

This section will cover the branching workflow to be followed when submitting code to any Black Mesa project.

## Creating Features & Adding to the Project

### Fetch & Update Master
So you got your first task or feature to tackle. The first thing you are going to do is to make sure that your **master** branch is up to date by running.

```bash
git fetch && git checkout master && git pull
```

### Create a new Feature Branch
Now, cut a **feature** branch using the following naming convention:
*feature/{ticket}-descriptive-name* where "{ticket}" is replaced with your Jira ticket number

```bash
// Create Branch called feature/BM-101-setup-authentication-service
git checkout -b feature/BM-101-setup-authentication-service

// Push branch to repository
git push origin feature/BM-101-setup-authentication-service

```

### Do The Work
Do the thing! Make sure to commit and push your code to the branch you have just crated as you go. Please keep the commit messages descriptive and formatted in the following way with the Ticket number at the start.

* BM-101 Added Authentication Layer for Firebase *

### Submit The Code for Review
Once you have finished your work, you must submit your code for *Code Review* before it can me merged to *Staging* for testing. Before submitting we  must first *squash* the commits to ensure our master Git Log stays clean.

## Squashing Commits
---
#### Rebase Feature Branch With Master
First we must rebase the branch with Master so we can be prompted to squash.

```bash
git rebase -i origin/master
```

Now you will be prompted to select which of your commits you want to Keep, Reword or Squash. Take some time to read the instructions on the screen and select the appropriate Commit message you want to display.

Once the rebase has finished you must *FORCE* push your branch back up. Please be *VERY* careful with this and ensure you are pointing to the correct branch.
```
// Force pushing to Git - CAREFUL!
git push -f origin MY-BRANCH-BE-CAREFUL
```

Now that we have Squashed the commits we are ready to submit the working branch for *Code Review*. Once your Code has been approved by at least *TWO* other peers you may proceed to the next step.

If you must make changes to the code you submitted for review follow step **3** and **4** until it passes code review.

Once your code has been reviewed and approved it is time to merge it to the current staging branch for QA testing.

```bash
// Fetch latest staging branch
git fetch && git checkout current-staging-branch && git pull origin current-staging-branch

// Merge Feature Branch Into Staging
git merge feature/BM-101-setup-authentication-service

// Push Merged Staging Branch
git push origin current-staging-branch
```

Voila! You submitted your code to QA!

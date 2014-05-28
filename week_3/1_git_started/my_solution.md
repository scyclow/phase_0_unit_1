## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Adds a file to a git repository.

#### branch
Creates an alternate timeline of changes to files in the repository.

#### checkout
Switches the working directory to a specified branch, commit, or file.

#### clone
Create a "working" copy an existing git repo (i.e. a copy that you can change and update, with its own working directory). The cloned repo is also connected to the original repo

#### commit
Saves all changes in the current working directory. This is essentially a 'save point', and can be revisited later on.

#### fetch
Imports all the commits from another repo. These commits are read-only; it allows you to review before you merge them into your master branch. 

#### log
Prints out the repo's entire commit history with comments. Arguments can specifiy number of commits displayed, as well as elaborations or summaries of the information displayed for each commit.

#### merge
Combines two the files of two timeline within the repo. Merging one branch with a master branch creates a single repo with all files. If there is a conflict between the merge candidates, you specify the document in question.

#### pull
Immidiately syncs up your repo with a remote repo. Fetches, then merges automatically. 

#### push
The opposite of pull; syncs up your repo with a remote repo by altering the remote repo. 

#### reset
Git's "undo" button. This alters the repo so that it looks like the last commit. Unless specified, all changes made since the commit will stay in the working directory. 

#### rm
Untracks a file in the repo without deleting it. 

#### status
Pulls up a list of all the files that have been changed since the last commit, seperated into files being tracked, and not being tracked. It also pulls up a list of files that are currently staged to be committed. 

## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection

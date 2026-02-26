# HOTHXIII Intro to Git

**Date of Workshop: February 24th**

**Teacher: Max Zhang**

**Description:**

- [Slides](https://docs.google.com/presentation/d/11ShSF4tyv7Uof_YNRTYid7Up79wKKJd_1BGQlboxWqQ/edit?usp=sharing)
- [Workshop Recording](https://drive.google.com/file/d/1SYJ-J0rg6qOJqsx2zmpKuBDPf6bfq9Ba/view?usp=sharing)

---
Summary:

The Scenario:

You’re at HOTH. You’ve been coding for 30 straight hours. The caffeine is hitting different. Everything was working… until suddenly it’s not.

You know you added a feature somewhere. You just don’t know when. Or where. Or why.

This is where Git saves your life — and possibly wins you that $350 Amazon gift card.

Git keeps track of:

* What you changed
* When you changed it
* Why you changed it
* Who changed it

Instead of guessing your way through chaos, Git lets you rewind time with precision.

What Is Git?

Git is a version control system.

That means it:

* Takes snapshots of your code
* Tracks changes over time
* Lets you go back to previous versions
* Helps teams work on the same project without overwriting each other

Every time you properly save in Git, you create a checkpoint, like a save point in a video game.

Mess something up? Roll back.
Trying a risky feature? Use a branch.
Working in a group? Git keeps everyone organized.

Git Is NOT GitHub

This is one of the biggest beginner confusions.

Git = the tool
GitHub = the platform

Git lives on your computer.
GitHub lives online.

A simple analogy:

Git is like Google Docs — where you make edits.
GitHub is like Google Drive — where you store and share those documents.

GitHub is built on Git. It just adds collaboration tools, sharing, and a clean interface.

Why Use Git?

* Manage group projects
* Fix bugs while building new features
* Work safely using branches
* Track history
* Collaborate professionally

It’s basically mandatory in real-world software development.

Setting Up Git

Mac
Install Homebrew from [https://brew.sh/](https://brew.sh/)
Then run:
brew install git
git --version

Windows
Download from [https://git-scm.com/install/windows](https://git-scm.com/install/windows)

Linux
sudo apt-get install git-all

For Everyone
Set up your identity:
git config --global user.name "Bob"
git config --global user.email [Bob@gmail.com](mailto:Bob@gmail.com)
git config --list

Now Git knows who you are when you make commits.

Creating a Repository

A repository (repo) is just your project folder — but with Git tracking enabled.

Technically, Git creates a hidden .git folder that stores history.
But for now: repository means project.

To create one:

mkdir Demo    <--- creates a directory/folder
cd ./Demo
git init

“init” means initialize. You just told Git:
Start tracking this project.

Commits & The 3 Stages of Git

When you save in Git, it’s not just one step — it’s three. This is what gives you control.

1. Working Directory
   This is where you’re actively editing files.

Think of it like cooking ingredients in the kitchen.

2. Staging Area
   This is where you choose what goes into your next save.

Like organizing cooked food into meal prep containers. You decide what gets included.

3. Git Directory (Repository History)
   This is where commits are permanently stored.

Like putting those containers in the fridge.

Basic Workflow Commands

Create files:
touch jaivin.py

Add changes:
git add .
git add filename

Commit:
git commit -m "Added login feature"

Check status:
git status

View history:
git log

Every commit is like a labeled checkpoint in a game.

Clear messages matter.
“fixed stuff” is not helpful.
“Fixed login validation bug” is helpful.

Branching: The Multiverse of Coding

Branching lets you work on new features without breaking your main code.

When you create a repository, you start on the main branch.

A branch lets you:

* Experiment safely
* Add features
* Fix bugs
* Work independently

If you mess up? Just go back to main. No consequences.

You can create multiple branches — but you can only actively be on one at a time.

It’s basically the coding multiverse.

Branch Commands

Create branch:
git branch feature-login

Switch branch:
git checkout feature-login

Create and switch in one command:
git checkout -b feature-login

Merging: Combining Universes

When your feature works and you’re ready to combine it with main:

git checkout main
git merge feature-login

If there are conflicts, Git will tell you.

After merging:
git branch -d feature-login

Now your feature is officially part of main.

GitHub: Where Projects Live Online

GitHub is like social media for developers.

Instead of vacation photos, you see code.

On GitHub you can:

* Store projects online
* Collaborate with others
* Clone projects
* Submit pull requests

Cloning

Cloning means downloading a GitHub repository to your local computer.

git clone url

This gives you:

* The entire project
* Full commit history
* A connection to the remote repository

You now have both local and online versions synced.

Push & Pull: Syncing Local and Remote

Pull (Always do this first)
git pull

This gets the latest updates from GitHub to your computer.

Push
git push

This sends your local commits to GitHub.

First time pushing a branch:
git push -u origin branch-name

The -u sets up an upstream branch — meaning your local branch is now connected to the remote branch.

Important rule:
You usually don’t push directly to main when building features.

Instead:

* Create a branch
* Push the branch
* Open a pull request

Pull Requests

A pull request (PR) is asking:

“Hey, can you pull my changes into main?”

This is how teams review code before merging.

It prevents:

* Accidental bugs
* Broken production code
* Chaos

Key Terms Recap

Repository – Your project
Commit – A saved checkpoint
Branch – A separate version for new work
Merge – Combine branches
Clone – Download repo locally
Push – Send local changes to GitHub
Pull – Get remote changes locally
Pull Request – Ask to merge your branch

The 3 Git Stages

Working Directory
Staging Area
Git Repository

Essential Commands Cheat Sheet

git status
git init
git checkout -b "branch-name"
git checkout "branch-name"
git add .
git commit -m "message"
git push -u origin branch-name
git pull

Now you’re equipped.

You can:

* Track changes
* Collaborate safely
* Avoid destroying your project at 3 AM
* Actually understand what’s happening in your repo

Now you can fix your bug and win that big prize at HOTH!!!

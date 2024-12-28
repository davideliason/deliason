#!/bin/bash

# Get the commit message from the user
read -p "Enter commit message: " commit_message

# Add all changes
git add .

# Commit the changes
git commit -m "$commit_message"

# Push the changes to the remote repository
git push origin master

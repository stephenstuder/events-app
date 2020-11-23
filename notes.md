So cherry pick is a way to take a specific commit and bring it into your branch. A use case at trek would be if I did loads of work to fix a bug only to find out that my branch was based off of develop instead of release. The code changes are valid, but I do not want to commit all the stuff is not supposed to be in release. So I make a new branch, and cherry-pick the good changes from my old branch. And walahhh, all fixed.

It will only bring in changes that were made in the specified commit!!!

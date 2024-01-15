# This is a food app

## if changes are not reflecting into the browser, use below methods

### Parcel --no-cache index.html

### After doing the changes into the component save the package json file as well. its is silly but it is working😉

---

1. git config --global user.name
2. git config --global user.email
3. git symbolic-ref --short HEAD
4. cat .git/HEAD
5. git config --get remote.origin.head
6. git branch

---

To configure the default branch for a Git repository, you can follow these steps:

1. Create a New Branch:
   First, create a new branch with the name you want to set as the default branch. Common names include "main," "develop," or "release."
   bash
   Copy code

   > git checkout -b main
   > Replace "main" with your preferred branch name.

2. Push the New Branch:
   Push the newly created branch to the remote repository.
   bash
   Copy code

   > git push -u origin main
   > Again, replace "main" with your branch name.

3. Change the Default Branch Locally:
   Change your local repository's default branch using the following commands:
   bash
   Copy code

   > git branch -m main
   > git push -u origin main
   > Replace "main" with your branch name.

4. Change the Default Branch on the Remote:
   Go to your Git hosting platform (e.g., GitHub, GitLab, Bitbucket) and navigate to the repository settings.
   Look for an option to change the default branch or the primary branch. The specific location may vary depending on the platform.
   Update the default branch setting to the new branch you created (e.g., "main").

5. Update Local Repositories (Optional):
   If you have local clones of the repository, you may want to update them to use the new default branch.
   bash
   Copy code
   > git fetch --all
   > git branch --set-upstream-to=origin/main main
   > Replace "main" with your branch name.

Note:
Be cautious when changing the default branch, especially if the repository is actively used by collaborators. Notify your collaborators about the change to avoid confusion.
Update any automation or CI/CD configurations that reference the default branch to ensure a smooth transition.

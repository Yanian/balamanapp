Tools for Midterm

1. Text Editor: Sublime
2. Remote Repository: Github
3. Version Control: Git
4. Deployment: Heroku

Checklist
 * should have Github Account
 * should have Heroku Account
 * should have Sublime Text
 * should have Portable Git

 1. Create a local repo
 2. Create a README.md
 3. Save it to Github
 4. Modify our local repo by adding files
    balamanapp
     - app.html
     - css
       - app.css
     - js
       - app.js
 5. Synchronize local and remote repo
 6. Deploy it to heroku

<hr/>

#Setup Files
App Information ```package.json```
App Documentation ```README.md```
App Ignore Files ```.gitignore```
App Tasks ```tasks.todo```

<hr/>

#SSH/HTTP Troubleshooting Codes

* ```$ cd ~/.ssh```
* ```$ ssh-keygen -t rsa -b 4096 -C "your email address"```

```
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Admin10/.ssh/id_rsa): id_rsa_clydeinwebdev
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

* ```$ eval "$(ssh-agent -s)"```
* ```$ ssh-add ~/.ssh/id_rsa_clydeinwebdev```
* ```$ clip < ~/.ssh/id_rsa_clydeinwebdev.pub```
* Paste the code in to your github ssh settings

* ```$ git remote set-url origin git@github.com:clydeinwebdev/balamanapp.git```
* ```$ git remote -v```
* ```$ git remote set-url origin https://github.com/clydeinwebdev/balamanapp.git```
* ```$ git push -u origin master```

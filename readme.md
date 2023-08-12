# Template

Use this template to create the base of your new project.

It consists of a server and a web client. It utilizes vldom, vlserver and vlquery and is also setup to run on vlcluster.


## Clone into your project
Go to your repository folder, open a terminal and run the following commands.

```
mkdir <your-project-name>
cd <your-project-name>

git init
git pull git@github.com:acryps/template.git
```

Now you have the whole code-base in your project and just need to push it to your remote git.

**Change the name of your project in the `package.json` and `client/index.html` (title tag in head) from 'template' to \<your-project-name\>.**

```
git add .
git commit -m "Init"
git branch -M main
git remote add origin <your-git-url>
git push -u origin main
```

## Build, start and debug project

In advance all packages have to be installed.

```
npm install

cd client
npm install

cd ../server
npm install
```

Afterwards the **server** can be built and started `npm run build; npm start` or debugged `npm run watch` and the **client** built `npm run build` or debugged `npm run watch`.
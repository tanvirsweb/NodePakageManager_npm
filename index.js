console.log('testing! This is a simple nodeJS application.')
/*
https://www.npmjs.com/search?q=uuid&ranking=optimal
In this URL we can see many NPM pakages that are made by other developers. If we want to do some work we can just use these pakages For FREE insted of doing full raw coding.

***to use nmp**
1. Install node.js (LTS: long time support) JavaScript runtime
2. https://nodejs.org/en/download
Install the installer it will Install Node & NPM at the same time.
3. node -v
4. npm -v (show version that is installed)
5. npm list (see list of pakages & their versions installed)
6. npm view pakageName versions (show all versions available of the pakage)

---------------
Initialize npm (Node Pakage Manager):
---------------
>> npm init 
Creates a pakage.json file which stores all pakage info: author, version, node dependencies etc.

>>npm init -y 
Auto say yes to options
-----------------------

pakage.json-> will stay in github repository but we won't save the pakage itself(reduce file size)
host & build the application at a Host-> run Build command ->it will install the pakages there without hvaing to transger them over github

***
pakage.json = allowed version of pakages used
pakage-lock.json = exact version
If npm manager faces problem installing version in pakage.json it will install exact version specified in pakage-lock.json file.
***

>> npm i date-fns (i=short form of install)
Will install pakage in dependency which will be Added in JSON file

*****************************************
Not Store Node Module Git repository:
--------------------------------------
1. create .gitignore file 
2. write: node_modules

It will not store node module (npm) files in github

-----------------------------
After cloning a project:
-----------------------------
>>npm install
Read JSON file and install all Node Modules Dependencies that are required
*****************************************

In Terminal(install pakage Globally without adding it to specific project):
>> nmp install nodemon -g
Globally install (flag: -g)

------------------------- 
Run nodemon:
-------------------------
>> nodemon 
Same as -> node index.js

>> nodemon filename.js
Write file name if name not index.js
nodemon->monitor (node) files,as we save it Automatically Restarts the server
>> ctrl+C (exit nodemon)

>>npm install nodemon -D
Save nodemon as dev pakage (flag: (-D / --save-dev) save as Dev Dependency)

-------------------
Script:
-------------------
 
server uses script if we host this somewhere
type: start, build, dev, test

>> npm run start / npm start (no need to specify run)
Start script in JSON will run

>> npm run dev 
-------------------------------------------

>> npm i uuid
Generate id's different for each entry
This is a production dependency -> no need for flag

-------------------
Dependencies:
--------------------
"dependencies": {
    "date-fns": "^2.30.0",
    "uuid": "^9.0.1"
  }
  ^9.0.1 majorVersion:9 , minorVersion:0 ,patch:1
  (Caret before version)^ = allow to update minor versions/patches, But Not Major version (updating major version could breaking changes to application)
  (Tilde before version)^ = allow to update patches, But Not minor versions / Major version 
  "uuid": "9.0.1"  -->allow Exactly 9.0.1 version only

  (Asteric) * = Update everything all the time. Use absolute latest version every time.
  "uuid": "*"

  Mannualy install nmp pakage:
  -----------------------------
  >> npm install uuid 
  Install latest version

  >> npm install uuid@8.3.1 
  Install specific version

  >> npm install nodemon@^8.3.0 
  Allow update minor version & pathches 

  -------------------------------------------
  Check Allowed Update in npm pakages:
  -------------------------------------------
  >> npm update

  ------------------------------
  uninstall pakage:
  -----------------------------
  >> npm uninstall nodemon -D
  or,
  >> npm un nodemon -D
  or,
  >> npm rm nodemon -D

  -----------------------------------------------------------------------
  Npm installed as (uninstall flag for different type installed pakages):
  -----------------------------------------------------------------------
  DevDependency: npm rm nodemon -D
  Globally: npm rm nodemon -g
  Production(locally: access only this project): npm rm nodemon

-->we have used this dependencies in SCRIPT. We need to reove it Manually.
-->Each time Remove a Pakage Check in script it's not used.
------------------------------------------
*/

const { format } = require('date-fns')

console.log( 'current date & time: \n' + format(new Date(), 'yyy/MM/dd\tHH:mm:ss') )

const { v4: uuid } = require('uuid')
console.log('uid: \n' + uuid())
// console.log('uid: \n', uuid()) // concatenate by comma , => will add extra space.

// import v4 as uuid -->this is specific for version 4
/*
or,
const uuid = require('uuid')
console.log( uuid.v4() )
-> generate different id to the console & then our console log statement is what will log that
*/
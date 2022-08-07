
# E-Commerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Contributing](#contributing)
- [Tests](#tests)


## Description
Server based database for an ecommerce store using Sequelize and Express.js.

## Installation
Clone, download, or fork repo and follow steps below!

### Step 1: Install NPM Packages
```
npm i
```

### Step 2: Edit your .env

In the folders you'll find a .env.EXAMPLE file with the following:
```
DB_NAME='ecommerce_db'
DB_PW=''
DB_USER=''
```
Update DB_USER with your MySQL username and DB_PW with your MySQL password then save as .env (NOT .env.EXAMPLE)
### Step 3: Access MySQL to create database
```
mysql -u root -p
source db/schema.sql
```
### Step 4: Seed
```
npm run seed
```

## Usage 
Update your ecommerce backend through sequelize! To start type this in your console:
```
node server
```

## Contributing 
No need to contact for pull and fork requests! Go forth!

## Tests
Go to https://localhost:3001 in your browser or ThunderClient or Insomnia after running your server and check if your api routes are running correctly!

## Video
https://user-images.githubusercontent.com/104535318/183314438-314956e9-a0c5-4a09-9036-01aa03079285.mp4
Insomnia Demo from 1:20 to 3:48.

## GitHub and Contact
GitHub: [github.com/rheneadianne](https://github.com/rheneadianne)
Email:  [rheneadianne@gmail.com](mailto:rheneadianne@gmail.com)

## Contribution
Made with ❤️ by rhenea

# ABOUT PROJECT
This project helps to create a node structure application with Docker


***

## Installation
*You must have Docker installed on your local computer

1. Clone repository using the follow step: 
```
git clone https://github.com/joseportillo7/Node-Server.git
```
2. Access downloaded folder
```
cd <project's folder name>
```
3. Copy the next code lines and execute on your terminal
```
docker build -t node-server:1.1.0 .
docker run -p 3000:3000 -d node-server:1.1.0
```
4. You can get access to http://localhost:3000

***
## Usage

_How can you use this project_

**GET HTTP**

* / -> get http method

**POST HTTP**

* / -> post http method

**PUT HTTP**

* / -> put http method

**DELETE HTTP**

* / -> delete http method


## Features
1. express
2. dotenv
3. cors
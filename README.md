# Fullstack Exercise - similarWeb

Creating a full working enviroment that allow users to play and and song to playlist using Youtube player.

## General Design

### Database

- **"youtubeRecords"** collection based on the schema: 
  - *videoId* - string - The record video id on youtube platform.
  - *title* - string - The record title.
  - *duration* - string - The record duration time.
  - *timeStamp* - Date - The timestamp record was added to the playlist.

### Server
Supplied on the "server" folder README file.

### Client
Supplied on the "client" folder README file.

## Installation

- Download the project into your local machine.
- Please make sure that you have already installed Node and NPM environments on your computer.

__
### Database

- Install as you would normally install MongoDB environment.
- Make sure your database instance is running.


__
### Server
- Enter into to the "Server" folder from the command-line and run the command "npm install". 
- Edit ".env" file inside the "server" folder to connect your MongoDB database by changing the value of "DB_HOST" (your have an example in the file).
- Run "npm start" to start running your server.

__
### Client
- Please make sure you have Node 8.16.0 or Node 10.16.0 or later version on your local development machine.
- Enter into to the "client" folder from the command-line and run the command "npm install". 
- Edit ".env" file inside the "client" folder to supply the Server API host address by changing the value of "REACT_APP_API" (your have an example in the file).
- Run "npm start" to start running your Client.


__
## Usage

- Open you browser and navigate into your client host address.
- Start adding records and having fun!
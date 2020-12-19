## Server

### General Design

- **"mainRoutes"** - Contains all server routing initalization.

- messages folder: 
   - **"messagesController"** - Contains all the implementation logic of each API call defined for the "messages area".
   - **"messagesModel"** - Contains the defenition for the model Schema of "messages" data.
   - **"messagesRoutes"** - Contains the initialization of the "messages" area routing.
   

### API
Support on the folloing API calls:
  - POST **<Your_Server_host>/api/message** - add new message object.
    
    - Body parameters:
      - "**email**" (string, required).
      - "**message**" (string, required).

    #### Example: 
    - Request: 
         - URL: ```POST http://localhost:8080/api/message```
         - Body: ```{"message": "test13","email": "aaa@aaa.com"}```

    - Response: 
```
  {
    "message": "Message save successfully.",
    "data": {
        "_id": "5fb50704f4a79b20d828ded1",
        "email": "aaa@aaa.com",
        "message": "test13",
        "__v": 0
  }
```

__
  - GET **<Your_Server_host>/api/messages** - return all the messages according to the given filter value. 
    - Query parameters: 
       - **"filterBy"**(optional):  string, filter messages which their user email start with the given value. 
         If not supply - will display always the last 10 messages. 

    #### Example:
    - Request: ```GET http://localhost:8080/api/messages```

    - Response: 
```
{
    "data": [
        {
            "_id": "5fb6af1067137b49b40112f8",
            "email": "aaa@gmail.com",
            "message": "sdsadadasd",
            "timeStamp": "2020-11-19T17:44:48.019Z",
            "__v": 0
        }
    ]
}
```

__
  - GET **<Your_Server_host>/api/message/getLastActivatedTime** - return the last time user post message according to the given "email" parameter value.
 
    - Query parameters: 
       - **"email"**:  string, required.

    - Request: ```GET http://localhost:8080/api/message/getLastActivatedTime?email=aaa@aaa.com```
    - Response: 
```
{
    "lastActive": "2020-11-19T18:18:06.138Z"
}
```
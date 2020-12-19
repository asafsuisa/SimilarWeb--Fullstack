## Server

### General Design

- youtubeRecords folder: 
   - **"youTubeHelper"** - Contains helper function for youtube API.
   - **"youtubeRecordsModel"** - Contains the defenition for the model Schema of "record" data.
   - **"youtubeRecordsController"** - Contains the logic of handling events.
   - **"youtubeRecordsRoutes"** - Contains the youtube events handlers routings.
   

### Events

- **"addRecord"** - will get a video id or youtube link and add it to the playlist. 
	- Will return **"addRecordResponse"** event - which contains data about the added record.
	- Response example:
	
		-On success:
```
  {
    "success": true,
    "data": {
        "_id": "5fb50704f4a79b20d828ded1",
        "videoId": "wZkxte5sXH4",
        "title": "record title",
        "duration": "PT3M20S"
  }
```
		-On failure:
```
  {
    "success": false,
	"error"" "error messgae"
  }
```	


- **"getItems"** - When client connected will asked for all the records that were already added to the playlist.

	- Will return **"getItemsResponse"** event which contains the already added records orderd by timestamp (asc).
	- Response example:
		- On success:
```
  {
    "success": true,
    "data": [{
	    "_id": "5fb50704f4a79b20d828ded1",
        "videoId": "wZkxte5sXH4",
        "title": "record title",
        "duration": "PT3M20S",
		"timestamp": "2020-12-19T16:33:02+00:00"
		},
		...
	]
  }
```		
		-On failure:
```
  {
    "success": false,
	"error"" "error messgae"
  }
```	




	
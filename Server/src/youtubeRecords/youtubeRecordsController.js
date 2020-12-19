const https = require('https');
const YoutTubeRecordModel = require('./youtubeRecordsModel');
const youTubeHelper = require('./youTubeHelper');

exports.addRecord = (recordLink) => {
  return new Promise((resolve, reject) => {
    var recordLinkId = youTubeHelper.getVideoIdFromLink(recordLink);

    https.get(youTubeHelper.buildYouTubeApiUrl(recordLinkId), (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        let parsedData = JSON.parse(data);
        if (parsedData && parsedData.items && parsedData.items.length > 0) {
          const recordData = parsedData.items[0];
          const snippedPart = recordData.snippet;
          const contentPart = recordData.contentDetails;
          if (snippedPart && contentPart) {

            let recordModel = new YoutTubeRecordModel();

            recordModel.videoId = recordLinkId;
            recordModel.title = snippedPart.title;
            recordModel.duration = contentPart.duration;
            recordModel.timeStamp = new Date();

            recordModel.save((err, data) => {
              if (err) {
                resolve({ success: false, error: err });
              }
              resolve({ success: true, data: { _id: data._id, videoId: recordLinkId, title: snippedPart.title, duration: contentPart.duration } });
            });
          }
        }
        else {
          resolve({ success: false, error: 'Wrong link supplied' });
        }

      });

    }).on("error", (err) => {
      resolve({ success: false, error: err.message });
    });

  });
}

exports.getActivePlayList = () => {
  return new Promise((resolve, reject) => {
    YoutTubeRecordModel.find({})
      .sort({ timeStamp: 1 })
      .exec((err, records) => {
        if (err) {
          resolve({ success: false, error: err });
        }
        resolve({ success: true, data: records });
      });
  });
}


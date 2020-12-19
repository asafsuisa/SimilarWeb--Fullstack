var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  videoId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  timeStamp: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('youtubeRecords', messageSchema);

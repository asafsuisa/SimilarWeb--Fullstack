var youtubeController = require('./youtubeRecordsController');
var io = require('../index').socketIo;
module.exports = (socket) => {

  socket.on('addRecord', (recordLink) => {
    youtubeController.addRecord(recordLink).then(res => {
      if (res.success) {
        io.emit('addRecordResponse', res);
      } else {
        socket.emit('addRecordResponse', res);
      }
    });
  });

  socket.on('getItems', () => {
    youtubeController.getActivePlayList().then(res => {
      socket.emit('getItemsResponse', res);
    });
  });
}

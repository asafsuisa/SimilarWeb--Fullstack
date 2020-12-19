exports.buildYouTubeApiUrl = (videoId) => {
  return 'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=' + videoId + '&key=AIzaSyAveP6Sn5dAXEjvr-_unixW5-oQha0TqKE';
}

const youtubeRegExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;

exports.getVideoIdFromLink = (recordLink) => {
  const match = recordLink.match(youtubeRegExp);

  if (match && match.length >= 3 && match[2].length == 11) {
    return match[2];
  }

  return recordLink;
}
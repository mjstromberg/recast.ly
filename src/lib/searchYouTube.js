var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query || '',
      maxResults: options.max || 5,
      key: options.key,
      videoEmbeddable: true,
      type: 'video',
      part: 'snippet'
    },
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;

var VideoDetails = (props) => (
  <div>
    <h4>{props.video.snippet.title}</h4>
    <div>{'By: ' + props.video.snippet.channelTitle}</div>
    <div className="video-player-details-published">{'Published on ' + new Date(props.video.snippet.publishedAt).toDateString()}</div>
    <div className="video-player-details-description">{props.video.snippet.description}</div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;

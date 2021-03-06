var VideoList = (props) => (
  <div className="video-list media">
    <label className="switch">
      <input type="checkbox"/>
      <div className="slider round"></div>
    </label>
    <div className="video-list-autoplay">Autoplay</div>
    {props.videos.map((video, index) =>
      <VideoListEntry
        video={video}
        clickHandler={props.clickHandler}
        index={index}
      />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.isCalled = false;
    this.autoplayOn = false;

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidMount () {
    this.props.searchYouTube({query: 'cats', key: YOUTUBE_API_KEY}, function(data) {
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    }.bind(this));
  }

  clickHandler (index) {
    this.setState({
      currentVideo: this.state.videoList[index]
    });
  }

  submitHandler (input) {
    if (!this.isCalled) {
      this.props.searchYouTube({query: input, key: YOUTUBE_API_KEY}, (data) => {
        this.setState({
          videoList: data,
          currentVideo: data[0]
        });
      });
      
      this.isCalled = true;
      setTimeout(() => { this.isCalled = false; }, 500);
    }
  }

  handleAutoplaySliderChange (value) {
    this.autoplayOn = value;
  }

  handleEndedVideo (video, eventInteger) {
    console.log(eventInteger);
    var endedVideoIndex = this.state.videoList.map((listVideo) => { return listVideo.id.videoId; }).indexOf(video.id.videoId);
    if (eventInteger === 0 && this.autoplayOn) {
      this.setState({
        currentVideo: this.state.videoList[endedVideoIndex + 1]
      });
    }
  }

  render () {
    return (
      <div>
        <Nav submitHandler={this.submitHandler.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer
            video={this.state.currentVideo}
            appState={this.state}
            handleEndedVideo={this.handleEndedVideo.bind(this)}
          />
        </div>
        <div className="col-md-5">
          <VideoList
            videos={this.state.videoList}
            appState={this.state}
            clickHandler={this.clickHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

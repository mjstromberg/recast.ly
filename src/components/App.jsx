class App extends React.Component {
  constructor(props) {
    super(props);

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
    this.props.searchYouTube({query: input, key: YOUTUBE_API_KEY}, function(data) {
      this.setState({
        videoList: data,
        currentVideo: data[0]
      });
    }.bind(this));
  }

  render () {
    return (
      <div>
        <Nav submitHandler={this.submitHandler.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} appState={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} appState={this.state} clickHandler={this.clickHandler.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

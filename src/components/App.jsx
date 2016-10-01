class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  clickHandler (index) {
    this.setState({
      currentVideo: this.state.videoList[index]
    });
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} appState={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} appState={this.state} clickHandler={this.clickHandler.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// import logo from './logo.svg';
import React from 'react';
import './App.css';
import getTopRatedTutorialsForTags from "./functions/getTopRatedTutorialsForTags";
import searchForTutorials from './functions/searchForTutorials';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      displayData: [],
      tags: '',
      searchTerms: '',
      disabledTagButton: true,
      disabledSearchButton: true
    };

    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.onClickTags = this.onClickTags.bind(this);
    this.handleChangeSearchTerms = this.handleChangeSearchTerms.bind(this);
    this.onClickSearchTerms = this.onClickSearchTerms.bind(this);
  }

  handleChangeTags(event) {
    if(event.target.value) {
      this.setState({ disabledTagButton: false });
    } else {
      this.setState({ disabledTagButton: true });
    }

    this.setState({ tags: event.target.value });
  }

  async onClickTags() {
    const updatedData = await getTopRatedTutorialsForTags(this.state.tags);
    this.setState({ 
      data: updatedData,
      displayData: updatedData
    });


  }

  handleChangeSearchTerms(event) {
    console.log(event.target.value)

    if(event.target.value) {
      this.setState({ disabledSearchButton: false });
    } else {
      this.setState({ disabledSearchButton: true });
    }

    this.setState({ searchTerms: event.target.value });
  }

  onClickSearchTerms() {
    const updatedData = searchForTutorials(this.state.searchTerms, this.state.data);
    console.log(updatedData)
    this.setState({ 
      displayData: updatedData
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        {/* My Code Starts Here */}
          <h1 className="Title">Video Tutorials</h1>
          <label htmlFor="tags">enter tags seperated by commas</label>
          <i>e.g. Hard,Exciting,Passive</i>
          <input id="tags" onChange={this.handleChangeTags} placeholder="TAGS" value={this.state.tags}/>
          <button onClick={this.onClickTags} disabled={this.state.disabledTagButton}>
            SUBMIT
          </button>

          <p className="Seperated-paragraph">after you've loaded some videos</p>

          <label htmlFor="search">enter any search terms seperated by commas</label>
          <i>e.g. Medium,Katy,Learn</i>
          <input id="search" onChange={this.handleChangeSearchTerms} placeholder="SEARCH TERMS" value={this.state.searchTerms}/>
          <button onClick={this.onClickSearchTerms} disabled={this.state.disabledSearchButton}>
            SUBMIT
          </button>

          {this.state.displayData.map((video) => {
            const roundedAverageUserRating = Math.round(video.averageUserRating*100);

            return (
            <div key={video.id} className={'Video-container'}>
              <h1><a href={video.videoUrl} className={'App-link'}>{video.videoTitle}</a></h1>
              <p>Teacher Name: {video.teacherName}</p>
              <p>Rating: {roundedAverageUserRating}</p>
            </div>
            );
          })}
        {/* My Code Ends Here */}
        </div>
      </div>
    );
  }
}

export default App;

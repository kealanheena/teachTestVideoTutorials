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

    this.refreshApi = this.refreshApi.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.onClickTags = this.onClickTags.bind(this);
    this.handleChangeSearchTerms = this.handleChangeSearchTerms.bind(this);
    this.onClickSearchTerms = this.onClickSearchTerms.bind(this);
  }

  async componentDidMount() {
    const updatedData = await getTopRatedTutorialsForTags();
    this.setState({ 
      data: updatedData,
      displayData: updatedData
    });
  }

  async refreshApi() {
    const updatedData = await getTopRatedTutorialsForTags();
    this.setState({ 
      data: updatedData,
      displayData: updatedData
    });
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
    const updatedData = await getTopRatedTutorialsForTags(this.state.tags.trim());
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
    let pageBody;

    if (this.state.displayData.length) {
      pageBody = this.state.displayData.map((video) => {
        const roundedAverageUserRating = Math.round(video.averageUserRating*100);
    
        return (
        <div key={video.id} className={'Video-container'}>
          <h1><a href={video.videoUrl} className={'App-link'}>{video.videoTitle}</a></h1>
          <p>Teacher Name: {video.teacherName}</p>
          <p>Rating: {roundedAverageUserRating}</p>
        </div>
        );
      })
    } else {
      pageBody = <p>Oops, Seems like there was no results for your search maybe try something else</p>
    }
    return (
      <div className="App">
        <div className="App-header">
        {/* My Code Starts Here */}
          <h1 className="Title">Video Tutorials</h1>
          <button className="Refresh-api" onClick={this.refreshApi}>
            REFRESH API
          </button>
          <label htmlFor="tags">enter tags separated by commas</label>
          <i>e.g. Hard,Exciting,Passive</i>
          <input id="tags" onChange={this.handleChangeTags} placeholder="TAGS" value={this.state.tags}/>
          <button onClick={this.onClickTags} disabled={this.state.disabledTagButton}>
            SUBMIT
          </button>

          <p className="Divider">after you've loaded some videos</p>

          <label htmlFor="search">enter any search terms separated by commas</label>
          <i>e.g. Medium,Katy,Learn</i>
          <input id="search" onChange={this.handleChangeSearchTerms} placeholder="SEARCH TERMS" value={this.state.searchTerms}/>
          <button onClick={this.onClickSearchTerms} disabled={this.state.disabledSearchButton}>
            SUBMIT
          </button>

          {pageBody}

        {/* My Code Ends Here */}
        </div>
      </div>
    );
  }
}

export default App;

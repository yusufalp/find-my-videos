import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';

require('dotenv').config()

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  searchSubmitHandler = (searchTerm) => {
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&maxResults=10`;

    fetch(`${url}&q=${searchTerm}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong!');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => this.setState({ videos: data.items }))
      .catch(err => console.log(err));
  }
  selectVideoHandler = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {

    return (
      <div className="App">
        <h1>Find My Video</h1>
        <SearchBar onSearchSubmit={this.searchSubmitHandler} />
        <h2>Videos</h2>
        <div className='video-container'>
          <div className='video-list'>
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className='video-list'>
            <VideoList selectVideo={this.selectVideoHandler} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

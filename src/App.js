import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
require('dotenv').config()

class App extends React.Component {
  state = {
    videos: []
  }
  searchSubmitHandler = (searchTerm) => {
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    let url = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&chart=mostPopular`;
   
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
  render() {
    console.log(this.state.videos)
    return (
      <div className="App">
        <h1>Find My Video</h1>
        <SearchBar onSearchSubmit={this.searchSubmitHandler} />
        <p>I have {this.state.videos.length} videos.</p>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

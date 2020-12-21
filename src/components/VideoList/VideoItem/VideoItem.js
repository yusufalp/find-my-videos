import React from 'react';
import './VideoItem.css';

const VideoItems = (props) => {
  return (
    <div onClick={() => props.selectVideo(props.video)} className='video-item container'>
      <img className='item' src={`${props.video.snippet.thumbnails.default.url}`} alt={`${props.video.snippet.title}`} />
      <p className='item'>{props.video.snippet.title}</p>
    </div>

  )
}

export default VideoItems;
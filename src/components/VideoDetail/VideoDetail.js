import React from 'react';
import './VideoDetail.css';

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Select a video to view...</div>
  }

  return (
    <div className='video-detail'>
      <iframe
        width="720"
        height="480"
        title={props.video.snippet.title}
        src={`https://www.youtube.com/embed/${props.video.id.videoId}`} />
      <h2>{props.video.snippet.title}</h2>
      <p>{`${props.video.snippet.description}`}</p>
    </div>
  )
}

export default VideoDetail;
import React from 'react';
import VideoItem from './VideoItem/VideoItem';

const VideoList = (props) => {
  const renderedList = props.videos.map(video => {
    return <VideoItem key={video.id} video={video} selectVideo={props.selectVideo} />
  })

  return (
    <div>
      {renderedList}
    </div>
  )
}

export default VideoList;
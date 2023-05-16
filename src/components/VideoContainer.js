import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDOES_API } from '../utils/content';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  useEffect(() =>{
      getVideos();
  }, [])

  const getVideos = async () =>{
    const data = await fetch (YOUTUBE_VIDOES_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json?.items)
  }
  return (
    <div className="flex flex-wrap">
      {videos.map(video =>{
          return <Link to={"/watch?v=" + video.id}>
                    <VideoCard key={video.id} info={video}/>
                </Link>
      })}
    </div>
  )
}

export default VideoContainer;
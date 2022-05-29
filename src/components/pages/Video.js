import styles from './modules/Video.module.css'
import React, { createRef, useState } from 'react'
import {
  Playlist,
  goToNextVideo,
  goToPreviousVideo
} from 'reactjs-video-playlist-player'

function Video(){
    const [videoList, setVideoList] = useState([
        {
          //thumbnail: "https://via.placeholder.com/500/FFA500/FFFFFF",
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          imgAlt: "Image 1 not found"
        },
        {
          //thumbnail: "https://via.placeholder.com/500/FF0000/FFFFFF",
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
          imgAlt: "Image 2 not found"
        },
        {
        //  thumbnail: " ",
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          imgAlt: "Image 3 not found"
        },
        {
         // thumbnail: "https://via.placeholder.com/500/FFFF00/000000",
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          imgAlt: "Image 4 not found"
        },
        {
         // thumbnail: "",
          url:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
          imgAlt: "Image 5 not found"
        }
      ]);
    
      const [currentVideo, setCurrentVideo] = useState(0);
      const vidRef = createRef(null);
    
      const params = {
        videos: videoList,
        autoPlay: true,
        showQueue: true,
        playForward: true,
        //defaultQueueItemPlaceholderThumbnail: videoPlaceHolder,
        currentVideo: currentVideo,
        setCurrentVideo: setCurrentVideo,
        vidRef: vidRef
      };
    
      return (
        <div>
          <div>
            <Playlist playlistParams={params} />
          </div>
     
        </div>
      );
}




export default Video;
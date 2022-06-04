import { Param } from './Video.functions';
import React, { createRef, useState } from 'react';
import {
  Playlist,
  goToNextVideo,
  goToPreviousVideo
} from 'reactjs-video-playlist-player';

function Video(){
      const [currentVideo, setCurrentVideo] = useState(0);

      const vidRef = createRef(null);
    
      return (
        <div>
          <div>
            <Playlist playlistParams={Param(currentVideo, setCurrentVideo, vidRef)} />
          </div>
        </div>
      );
}




export default Video;
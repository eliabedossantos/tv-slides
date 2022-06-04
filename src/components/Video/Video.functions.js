import { Videos } from "./Videos.list";

export function Param(currentVideo, setCurrentVideo, vidRef){
    
    const params = {
        videos: Videos,
        autoPlay: true,
        showQueue: true,
        playForward: true,
        //defaultQueueItemPlaceholderThumbnail: videoPlaceHolder,
        currentVideo: currentVideo,
        setCurrentVideo: setCurrentVideo,
        vidRef: vidRef
    };

    return params;
}
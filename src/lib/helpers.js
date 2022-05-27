export function toggleFullScreen() {
  if (!document.fullscreenElement &&  !document.mozFullScreenElement && !document.webkitFullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
     if (document.cancelFullScreen) {
        document.cancelFullScreen();
     } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
     } else if (document.webkitCancelFullScreen) {
       document.webkitCancelFullScreen();
     }
  }
}

export function setItemToLocalStorage(item, value){
  localStorage.setItem(item, JSON.stringify(value));
}

export function getItemToLocalStorage(item){
  const content = localStorage.getItem(item);
  return JSON.parse(content != '' ? content : 'false');
}
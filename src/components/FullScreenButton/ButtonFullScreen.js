import { FaExpand } from 'react-icons/fa';
import { ButtonScreen } from './ButtonFullScreen.styles';
import { toggleFullScreen } from './Button.functions';

function ButtonFullScreen() {

  return (
      <ButtonScreen id="btnFullscreen" type="button" onClick={toggleFullScreen}><FaExpand /></ButtonScreen>
    );

}

export default ButtonFullScreen;
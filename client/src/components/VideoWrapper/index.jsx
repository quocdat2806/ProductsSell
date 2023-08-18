import classNames from "classNames/bind";
import styles from "./VideoWrapper.module.scss";
const cx = classNames.bind(styles);
function VideoWrapper() {
  return (
      <div className={cx('Video_wrapper','noselect')}>
        <div data-tour="learning-center">
          <div>
            <div
              
              style="width: 100%; height: 100%;"
            >
              <div
                
                style='width: 100%; height: 100%; background-size: cover; background-position: center center; cursor: pointer; display: flex; align-items: center; justify-content: center; background-image: url("https://i.ytimg.com/vi/V88PFJNlE-I/maxresdefault.jpg");'
              >
                <div
                  style="background: radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%); border-radius: 64px; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center;"
                >
                  <div
                    style="border-style: solid; border-width: 16px 0px 16px 26px; border-color: transparent transparent transparent white; margin-left: 7px;"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default VideoWrapper;

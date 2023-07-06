import classNames from "classNames/bind";
import styles from "./Tracks.module.scss";


import { CloseIcon, DownIcon } from "../../Icons";
import StepItem from "../StepItem";
const cx = classNames.bind(styles);

export function TrackWrapper({ children }) {
  return(
  <div className={cx("Tracks_wrapper")}>
    {children}
  </div>
  )
}
export function TrackItemWrapper(){
  return(
    <div className={cx('TrackItem_wrapper')}>
      <h3 className={cx('TrackItem_title')}>Gioi thieu</h3>
      <span className={cx('TrackItem_desc')}>3/3 | 07:28</span>
      <span className={cx('TrackItem_icon')}>
        <DownIcon/>
      </span>
    </div>
  )

}
export function TrackItemList(){
  return(
    <div className={cx('TrackItem_track-steps-list')}>
      <StepItem/>
    </div>
  )


}
export function TrackOverlay(){
  return(
    <div className={cx('Tracks_overlay')}></div>
  )
}

function Tracks() {
  return (
    <>
      <TrackWrapper>
        <div className={cx('Tracks_container')}>
            <div className={cx('Tracks_header')}>
              <h1 className={cx('Tracks_heading')}>Nội dung khóa học</h1>
              <button className={cx('Tracks_close-btn')}>
                <CloseIcon className='svg-inline--fa fa-mark'/>
              </button>
            </div>
            <div className={cx('Tracks_body')}>
              <TrackItemWrapper/>
              <TrackItemList/>
            </div>

        </div>
      </TrackWrapper>
    </>
  );
}

export default Tracks;

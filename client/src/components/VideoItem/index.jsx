import classNames from "classNames/bind";
import styles from "./VideoItem.module.scss";
import { ViewsIcon,LikesIcon,CommentsIcon } from "../../Icons";
const cx = classNames.bind(styles);

export function VideoItemInfo({duration}){
  return(
    <div className={cx("VideoItem_video-info")}>
    <div className={cx("VideoItem_play_wrap")}>
      <svg
        
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="play"
        className={cx('svg-inline--fa fa-play','VideoItem_play-icon')}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          fill="currentColor"
          d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
        ></path>
      </svg>
    </div>
    <div className={cx("VideoItem_duration")}>
      <span>{duration}</span>
    </div>
  </div>
  )

}


function VideoItem({data}) {
  return (
    <div className={cx("VideoItem_stats")}>
      <div>
        <ViewsIcon/>
        <span>{data.views}</span>
      </div>
      <div>
        <LikesIcon/>
       
        <span>{data.likes}</span>
      </div>
      <div>
        <CommentsIcon/>
        <span>{data.comments}</span>
      </div>
    </div>
  );
}

export default VideoItem;

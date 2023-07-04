import classNames from "classNames/bind";
import styles from "./TrackWrapper.module.scss";
const cx = classNames.bind(styles);

export function TrackWrapper({ children }) {
  <div className={cx("Tracks_wrapper")}></div>;
}

function TracksWrapper() {
  return (
    <>
      <TrackWrapper>
        <div className={cx('Tracks_container')}>
            <div className={cx('Tracks_header')}></div>
            <div className={cx('Track_body')}>

            </div>

        </div>
      </TrackWrapper>
    </>
  );
}

export default TracksWrapper;

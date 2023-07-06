import classNames from "classNames/bind";
import styles from "./Content.module.scss";
import VideoWrapper from "../VideoWrapper";
const cx = classNames.bind(styles);
function Content() {
    return ( 
        <div className={cx('Content_wrapper')}>
            <VideoWrapper/>
            
        </div>
     );
}

export default Content;
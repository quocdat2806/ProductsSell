import classNames from "classNames/bind";
import styles from "./NewFeed.module.scss";
const cx = classNames.bind(styles);
import { StoryIcon } from "../../Icons";

const NewFeed = () => {
  return (
    <div className={cx("NewFeed_wrapper")}>
        <button className={cx("NewFeed_btn")}>
        <span className={cx("NewFeed_icon")}>
        <StoryIcon/>
        </span>
        </button>
  </div>
  )
}

export default NewFeed
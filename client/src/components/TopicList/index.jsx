import classNames from "classNames/bind";
import styles from "./TopicList.module.scss";
const cx = classNames.bind(styles);
import React from "react";
import { Link } from "react-router-dom";

const TopicList = () => {
  return (
    <div className={cx("TopicList_wrapper")}>
      <h3>Các chủ đề được đề xuất</h3>
      <ul className={cx("TopicList_topics")}>
        <li>
          <Link>Font-end / Mobile apps</Link>
        </li>
        <li>
          <Link>Back-end / Devops</Link>
        </li>
        <li>
          <Link>UI / UI / Design</Link>
        </li>
        <li>
          <Link>Others</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopicList;

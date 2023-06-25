import classNames from "classNames/bind";
import styles from "./Bookmark.module.scss";
const cx = classNames.bind(styles);
import React from 'react'
import { BookmarkIcon } from "../../Icons";

const Bookmark = ({className}) => {
  return (
    <div className={cx('Bookmark_toggleBtn',`${className}`)}>
        <BookmarkIcon className={'svg-inline--fa fa bookmark'}/>
        
    </div>
  )
}

export default Bookmark
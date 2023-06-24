import React from 'react'
import classNames from "classNames/bind";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);
const Search = () => {
  return (
    <>
      <div className={cx('Search_wrapper','d-flex-center')}>
            <div className={cx('Search_SearchIcon')}></div>
            <input spellCheck={false} className={cx('Search_input')}
              type="text"
              placeholder="Tìm kiếm khóa học bài viết video ..."
            />
          </div>
    </>
  )
}

export default Search
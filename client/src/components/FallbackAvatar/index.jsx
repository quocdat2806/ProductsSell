import React from 'react'
import classNames from "classNames/bind";
import styles from "./FallbackAvatar.module.scss";
const cx = classNames.bind(styles);
const FallbackAvatar = ({children}) => {
  return (
    <div className={cx("FallbackAvatar_avatar")}>

        {children}
    </div>
  )
}

export default FallbackAvatar
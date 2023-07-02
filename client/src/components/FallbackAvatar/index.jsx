import React from 'react'
import classNames from "classNames/bind";
import styles from "./FallbackAvatar.module.scss";
const cx = classNames.bind(styles);
const FallbackAvatar = ({children,isFallBackPro}) => {
  return (
    <div className={cx("FallbackAvatar_avatar",{
      "FallBackAvatar_pro":isFallBackPro
    })}>

        {children}
        {isFallBackPro && <img src='https://fullstack.edu.vn/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg' className={cx('FallbackAvatar_crown')}/>}
    </div>
  )
}

export default FallbackAvatar
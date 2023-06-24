import classNames from "classNames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

import React from 'react'

const Button = ({className}) => {
  return (
    <button className={cx('Button_btn',` ${className}`)}>
        Xem khóa học
    </button>
  )
}

export default Button

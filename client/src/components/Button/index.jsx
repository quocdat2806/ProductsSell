import classNames from "classNames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

import React from 'react'

const Button = ({className,isPrimary,title}) => {
  return (
    <button className={cx('Button_btn',` ${className}`,{
      'Button_primary': isPrimary
    })}>
        {title}
    </button>
  )
}

export default Button

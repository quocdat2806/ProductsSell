import classNames from "classNames/bind";
import styles from "./CourseStep.module.scss";
const cx = classNames.bind(styles);

import React from 'react'

const CourseStep = () => {
  return (
    <a className={cx('CourseStep_wrapper')}>
        <img src="	https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png" alt="Kiến thức nhập môn IT" />

    </a>
  )
}

export default CourseStep
import React from 'react'
import classNames from "classNames/bind";
import styles from "./DefaultLayoutContainer.module.scss";
import MarkdownParser from '../../../components/MarkdownParser';
const cx = classNames.bind(styles);
const DefaultLayoutContainer = ({children,title,description}) => {
  return (
    <div className = {cx('DefaultLayout_container')}>
    <div className={cx('DefaultLayout_container-top')}>
        <h1 className={cx('DefaultLayout_container-heading')}>{title}</h1>
        <MarkdownParser description={description} className={cx('DefaultLayout_container-desc')}/>

    </div>
    <div className='DefaultLayout_container-body'>
        {children}

    </div>
    </div>
  )
}

export default DefaultLayoutContainer
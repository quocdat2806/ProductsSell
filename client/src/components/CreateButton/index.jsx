import classNames from "classNames/bind";
import styles from "./CreateButton.module.scss";
const cx = classNames.bind(styles);
import React from 'react'
import { AddIcon } from "../../Icons";

const CreateButton = () => {
  return (
    <div className={cx('CreateButton_wapper')}>
        <AddIcon className={cx('CreateButton_icon','svg-inline--fa','fa-plus')}/>

    </div>
  )
}

export default CreateButton
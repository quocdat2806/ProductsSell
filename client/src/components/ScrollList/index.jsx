import React from 'react'
import classNames from "classNames/bind";
import styles from "./ScrollList.module.scss";
const cx = classNames.bind(styles);
import IndexModule from '../IndexModule';
import CommonItem from '../CommonItem';
const ScrollList = ({className}) => {
  const ModuleRow = IndexModule['index-module-row']
  const ModuleCol = IndexModule['index-module-col']
  return (
    <div className={cx('ScrollList_vertical')}>
      <div>
        <div className={cx('ScrollList_heading-wrap')}>
          <h2 className={cx('ScrollList_heading')}>
            <span>
              Khóa học Pro
              <span className={cx('ScrollList_label')}>Mới</span>

            </span>


          </h2>

        </div>
      </div>
      <div className={cx('ScrollList_body')}>
        <ModuleRow>
          <ModuleCol>
            <CommonItem className={className} />
            
          </ModuleCol>
          <ModuleCol>
            <CommonItem className={className} />
            
          </ModuleCol>

          <ModuleCol>
            <CommonItem className={className} />
            
          </ModuleCol>

          <ModuleCol>
            <CommonItem className={className} />
            
          </ModuleCol>
          <div className={cx('ScrollList_view-all-box')}>

          </div>



        </ModuleRow>
       

      </div>
        
     


    </div>
  )
}

export default ScrollList
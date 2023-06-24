import React from 'react'
import classNames from "classNames/bind";
import styles from "./DefaultLayout.module.scss"
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import IndexModule from '../../components/IndexModule';
const cx = classNames.bind(styles);

const DefaultLayout = ({children}) => {
  const ModuleGrid = IndexModule['index-module-grid']
  return (
    <>
    <Header/>
    <div className={cx('container')}>
        <Sidebar/>
        <div className={cx('content')}>
          <ModuleGrid>
            {children}

          </ModuleGrid>
        </div>

    </div>
    <div className='footer'>
    <Footer/>

    </div>
    </>
  )
}

export default DefaultLayout
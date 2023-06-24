import React from 'react'
import classNames from "classNames/bind";
import styles from "./IndexModule.module.scss";
const cx = classNames.bind(styles);


class IndexModule {
    'index-module-grid'({children}){
        return (
            <section className={cx('index-module-gird')}>

                {children}
            </section>
        )

    }
    'index-module-row'({children}){
        return (
            <section className={cx('index-module-row')}>

               {children}
            </section>
        )

    }
    'index-module-col'({children,isSmallCol,isFullWidth}){
        return (
            <section className={cx('index-module-col',{
                'index-module-col-small':isSmallCol,
                'index-module-col-full-width':isFullWidth
            })}>

               {children}
            </section>
        )

    }
    'index-module-wide'({children}){
        return (
            <section style={{width:'1100px'}} className={cx('index-module-wide')}>

               {children}
            </section>
        )

    }


}

export default  new IndexModule
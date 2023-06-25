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
    'index-module-col'({children,col_16,col_66,col_33,col_100}){
        return (
            <section className={cx('index-module-col',{
                'index-module-col-small-16':col_16,
                'index-module-col-full-width':col_100,
                'index-module-col-large-66':col_66,
                'index-module-col-large-33':col_33,

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
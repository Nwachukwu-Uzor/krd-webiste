import styles from './Preloader.module.css'

import spinner from '../../assets/images/preloader.gif';

const Preloader = () => {
    return (
        <div className={styles.Preloader}>
            <img src={spinner} alt="spinner" />
        </div>
    )
}

export default Preloader;
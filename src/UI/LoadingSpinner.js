import React from 'react'
import LoadSpin from '../assets/76641-loading-2.gif'
import styles from './LoadingSpinner.module.css'

const Loadingspinner = () => {
    return (
        <div>
            <img src={LoadSpin} alt="Loading" className={styles.loading} />
        </div>
    )
}

export default Loadingspinner

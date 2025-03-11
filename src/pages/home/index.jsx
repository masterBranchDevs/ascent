import React from 'react'

// CSS modules import
import styles from './home.module.scss'

const HomePage = () => {
  return (<>
    <div className={styles.home}>
      <h1 className={styles.title}>
        This is a HomePage
      </h1>
    </div>
  </>
  )
}

export default HomePage
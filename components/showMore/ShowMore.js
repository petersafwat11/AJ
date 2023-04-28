import React from 'react'
import classes from './showMore.module.css'
import {RiArrowDownSLine} from 'react-icons/ri'
const ShowMore = () => {
  return (
    <div className={classes['container']}>
        Show more
        <div className={classes['arrow-wrapper']}>
          <RiArrowDownSLine className={classes['arrow']}/>
        </div>
    </div>
  )
}

export default ShowMore
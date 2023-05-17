import React from 'react'
import classes from './page.module.css'
import ActionsButtons from '../../../components/dashboard/actionsButtons/ActionsButtons'
const page = () => {
  return (
    <div className={classes['container']}>
        <h1 className={classes['title']}>Giveaway Settings </h1>
        <ActionsButtons first={'Save'}/>
        
    </div>
  )
}

export default page
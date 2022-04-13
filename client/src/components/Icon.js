import React from 'react'
import { getIconLetters } from '../utils/util'

const Icon = ({firstName="Kalyan", lastName="Bathula", classNames=[]}) => {
  return (
    <div className={`${"icon " + classNames.join(' ')}`} ><p>{getIconLetters(firstName, lastName)}</p></div>
  )
}

export default Icon
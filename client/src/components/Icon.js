import React from 'react'
import { getIconLetters } from '../utils/util'

const Icon = ({firstName="Kalyan", lastName="Bathula", classNames=[], clickHandler}) => {
  return (
    <div className={`${"icon " + classNames.join(' ')}`} onClick={(e) => {
      if(clickHandler) {
        clickHandler(e)
      }
    }} ><p>{getIconLetters(firstName, lastName)}</p></div>
  )
}

export default Icon
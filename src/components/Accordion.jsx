import React from 'react'
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from 'react-icons/md'
const Accordion = (props) => {
    function toggleAcc(){
        props.getId(props.id)
        console.log('clicked')
    }
  return (
    <div className='flex flex-col items-left border-b border-lighGrayishBlue'>
      <div onClick={toggleAcc} className={ `text-darkGrayishBlue flex flex-row items-center justify-between text-md p-2  h-12 cursor-pointer ${props.open?'font-light text-black':''}`}>
        {props.question} {props.open ? <MdOutlineKeyboardArrowUp/>:<MdOutlineKeyboardArrowDown/>}
      </div>

      {

        props.open &&  <div className='p-2 scale-in-ver-top text-sm text-veryDarkGrayishBlue'> {props.answer}
      </div>
      }
      
    </div>
  )
}

export default Accordion

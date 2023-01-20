import React from 'react'
import tr from '../img/trash.png'


export default function DT({v,dell}) {

  return (
    <div className='donet dtask'>
      <input type="text"  readOnly value={v}/> <button className='null'></button> <button className='delete' onClick={dell}><img  width={"30px"} color={"white"} src={tr} alt="" /></button>
    </div>
  )
}

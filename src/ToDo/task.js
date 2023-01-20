import React from 'react'
import tr from '../img/trash.png'

export default function Task({v,del,d}) {

  return (
    <div className="dtask">
      <input type="text" readOnly value={v}/> <button className='delete' onClick={del}><img src={tr} alt="" width={"30px"} /></button><button className='done' onClick={d}><i>&#x2713;</i></button>
    </div>
  )
}

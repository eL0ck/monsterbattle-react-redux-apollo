import React from 'react'

import './styles.css'

function MonsterStats({attack, defence, health}){
  return <div className='MonsterStats'>
    <div className='MonsterStats__attack'>
      <span className='MonsterStats__label'>Attack:</span>
      <span className='MonsterStats__value'>{attack}</span>
    </div>
    <div className='MonsterStats__defence'>
      <span className='MonsterStats__label'>Defence:</span>
      <span className='MonsterStats__value'>{defence}</span>
    </div>
    <div className='MonsterStats__health'>
      <span className='MonsterStats__label'>Health:</span>
      <span className='MonsterStats__value'>{health}</span>
    </div>
  </div>
}

export default MonsterStats

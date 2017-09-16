import React from 'react'

import MonsterAvatar from '../MonsterAvatar'
import MonsterName from '../MonsterName'

import './styles.css'

const MonsterBattleView = ({name, currentHealth, flip, winner}) => (
  <div className={'MonsterBattleView'}>
    <MonsterAvatar name={name} flip={flip} dead={currentHealth <= 0} />
    <MonsterName name={name} />
    {winner && <div className={'MonsterBattleView__fireworks'} />}
  </div>
)

export default MonsterBattleView

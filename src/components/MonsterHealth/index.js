import React from 'react'
import cx from 'classnames'

import './styles.css';

function MonsterHealth({
  health,
  currentHealth,
  flip,
  children }) {
  return <div className={cx('MonsterHealth', {'MonsterHealth--flip': flip})}>
    <div className="MonsterHealth__bar" style={{
      width: (Math.min(currentHealth/health, 1)*100) + '%'
      }}>
      {children && <div className='MonsterHealth__info'>
        {children}
        </div>
      }
    </div>
  </div>
}

export default MonsterHealth

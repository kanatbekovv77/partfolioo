import React from 'react'
import c from './mySkills.module.scss'
import SkillsCard from './skillsCard'
import { MySkillsList } from '../../utils'

const MySkills = () => {
  return (
    <div className={c.skills__container}>
      <div className={c.skills}>
        <div className={c.left}>
          <h3>What I'm About</h3>
          <p>
          Every day I learn and grow, striving to be better than I was yesterday. It’s important for me not just to build websites, but to do so with attention to detail, balancing aesthetics and usability. Constant growth and improvement are my path to new heights.  
          </p>
        </div>
        <div className={c.right}>
          {
            MySkillsList.map(item => <SkillsCard item={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MySkills
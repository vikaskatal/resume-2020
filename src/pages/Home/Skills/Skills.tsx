import React from 'react';
import { User } from '../../../constants';
import Skill from './Skill/Skill';

const Skills = () => {
  return (
    <section className="skills" >
    {/* #ffd810*/}
    <div className="container">
        <div className="title">
            <h2><span>Skills</span></h2>
            <div className="skill-items" id="skills">
            {/* owl-carousel */}
            {User.skills.map(({label, image, rate}) =>  <Skill image={image} label={label} rate={rate} /> )}
            </div>
        </div>
    </div>
</section>
  )
}

export default Skills

import React from 'react';
import { User } from '../../../constants';
import ExperienceItem from './ExperienceItem/ExperienceItem';

const Experience = () => {
  return (
    <section className="experience" id="scroll-pg">
      <div className="container">
          <div className="title">
              <h2><span>Experience</span></h2>
          </div>

          <div className="accordion">
            {User.experience.map(({
              c_name,
              post,
              more,
              website,
              start_date,
              end_date
            }) => (
              <ExperienceItem 
                c_name={c_name}
                post={post}
                more={more}
                website={website}
                start_date={start_date}
                end_date={end_date}
               />
            ))}
          </div>
      </div>
    </section>
  )
}

export default Experience;

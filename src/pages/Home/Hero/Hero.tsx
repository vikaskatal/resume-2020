import React from 'react'
import { User } from '../../../constants';

const Hero = () => {
  
  return (
    <div className="hero">
      <div className="left">
          {/* <div id="canvas-div"></div> */}
          <div className="info">
              <div className="dp">
                <img src={User.dp} alt={User.name} />
              </div>
          </div>
          <h2>{User.name}<span>{User.tag_line}</span></h2>
      </div>

      <div className="right">
          <div className="content">
            <h2>{User.name}<span>{User.tag_line}</span></h2>
            {User.description.map((desc,index)=> <p key={`desc_${index}`}>{desc}</p>)}
            <a href={User.cv} target="_blank" rel="noreferrer" className="spark-btn">Download Resume</a>
            <ul className="social-icons">
              {User.social_url.map(({name, url}, index) => (
                <li key={'si_'+index}>
                  <a href={url} target="_blank" rel="noreferrer" title={name}> {name} </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="scroll-btn transition" id="scroll-down">
              <span className="arrow-line transition"><span className="arrow"></span></span>
          </div>
      </div>
    </div>
  )
}

export default Hero;

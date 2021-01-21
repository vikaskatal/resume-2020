import React from 'react';
import { User } from '../../constants';

function Footer() {
  return (
    <footer>
        <div className="container pos-rel">

            <div className="scroll-btn transition" id="scroll-top">
                <span className="arrow-line transition"><span className="arrow"></span></span>
            </div>
            <p>To get in touch, write to
                <a href={`mailto:${User.email}`}>{User.email}</a>
            </p>

            <ul className="social-icons">
              {User.social_url.map(({name, url}, index) => (
                <li key={'si_'+index}>
                  <a href={url} target="_blank" rel="noreferrer" title={name}> {name} </a>
                </li>
              ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer

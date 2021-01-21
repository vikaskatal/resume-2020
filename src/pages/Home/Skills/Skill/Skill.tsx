import React from 'react'

type Props = {
  label: string; 
  rate: string;
  image: any;
}

const Skill: React.FC<Props> = ({ label, image, rate }) => {
  return (
    <div className="skill-item">
      <h3>{rate}<span>%</span></h3>
      <div className="block">
        {image ? (
            <div className="icon img">
              <img src={image} alt={label} />
            </div>
        ) : (
          <div className="icon"><span>{label[0]}</span></div>
        )}
        <p>{label}</p>
        <div className="bar">
            <span style={{width: `${rate}%`}}></span>
        </div>
      </div>
    </div>
  )
}

export default Skill

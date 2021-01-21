import React, { useState } from 'react'
import moment from 'moment';

type Props = {
  c_name: string; 
  post: string; 
  more: string[]; 
  website: string; 
  start_date: string; 
  end_date: string | null;
}

const ExperienceItem: React.FC<Props> = ({
  c_name,
  post,
  more,
  website,
  start_date,
  end_date,
}) => {

  const [showHiddenContent, setShowHiddenContent] = useState(false);

  const convertDays = ( daysToConvert: any ) => {

    let start = moment();
    let end = moment().add(daysToConvert, 'days');

    let years = end.diff(start, 'year');
    start.add(years, 'years');

    let months = end.diff(start, 'months');
    start.add(months, 'months');

    // let days = end.diff(start, 'days');

    let result = `${years > 0 ? `${years} years,` : ''} ${months} months`

    return result;
  }

  const workDuration = (start_date: any, end_date: any) => {

    let startDate = moment(start_date);
    let endDate = moment(end_date);

    if(end_date == null){
      endDate = moment(Date.now())
    }
    let workDays = endDate.diff(startDate, 'days')

    return convertDays(workDays)
  }


  return (
    <div className="tab closed" key={"tab_"+c_name}>
      <div className="arr" onClick={()=>setShowHiddenContent(!showHiddenContent)}></div>
      
      <div className="time-range">
        <em>
          {moment(start_date).format('YYYY')} 
          <small>
          {''} / {''} {moment(start_date).format('MM')} 
          </small>
          {''} - {''}
          {end_date === null ? 'Present' : (
            <>
            {moment(end_date).format('YYYY')} 
            <small>
              {''} / {''} {moment(end_date).format('MM')} 
            </small>
            </>
          )}
          <span className="duration">
            {workDuration(start_date, end_date)}
          </span>
        </em>
      </div>

      <div className="employer">
        <h4>{c_name}</h4>
        <h5>{post}</h5>
        {showHiddenContent && (
          <div className="hidden-content">
            {more.map((elem: string,index) => <p key={"more_"+index}>{elem}</p>)}
            <a className="web" href={website} rel="noreferrer" target="_blank">{website}</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceItem

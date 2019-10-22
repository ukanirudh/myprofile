import React from 'react'

const Education = () => {
  return (
    <div className="row education">
       <div className="three columns header-col">
          <h1><span>Education</span></h1>
       </div>

       <div className="nine columns main-col">
          <div className="row item">
             <div className="twelve columns">
                <h3>PESIT BSC</h3>
                <p className="info">Bachelor's of Engineering <span>&bull;</span> <em className="date">Sept 2011 - Oct 2015</em></p>
                <p className="info">VTU Board - 74.72%</p>
             </div>
          </div>

          <div className="row item">
            <div className="twelve columns">
               <h3>Sri Chaitanya Junior college</h3>
               <p className="info">Pre University<span>&bull;</span> <em className="date">Apr 2009 - Jun 2011</em></p>
               <p className="info">Andra Board(IPE) - 88%</p>
            </div>
          </div>

          <div className="row item">
            <div className="twelve columns">
               <h3>Kendriya Vidhyalaya</h3>
               <p className="info">High school<span>&bull;</span> <em className="date">Mar 2009</em></p>
               <p className="info">CBSE - 81.5%</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Education

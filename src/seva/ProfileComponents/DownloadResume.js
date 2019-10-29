import React from 'react'

const DownloadResume = () => {
  return (
    <div className="row">
      <div className="columns contact-details"></div>
      <div className="columns download">
        <p>
           <a href={require('../../static/data/Anirudh_resume.pdf')} download className="button">
             <i className="fa fa-download"></i>
             Download Resume
           </a>
        </p>
      </div>
    </div>
  )
}

export default DownloadResume

import React from 'react'

const DownloadResume = () => {
  return (
    <div className="row">
      <div className="columns contact-details">
        <p>
          <a href='https://zety.com/mycv/ukanirudh' target='_blank' download className="button">
          <i class="fas fa-id-badge margin-right-5px"></i>
            View Online
          </a>
        </p>
      </div>
      <div className="columns download">
        <p>
           <a href={require('../../static/data/Anirudh_resume.pdf')} download className="button">
             <i className="fa fa-download margin-right-5px"></i>
             Download Resume
           </a>
        </p>
      </div>
    </div>
  )
}

export default DownloadResume

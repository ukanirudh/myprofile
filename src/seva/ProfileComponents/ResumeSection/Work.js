import React from 'react'

const Work = () => {
  return (
    <div className="row work">
       <div className="three columns header-col">
          <h1><span>Work</span></h1>
       </div>

       <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Syncron Internation</h3>
              <p className="info">Software Engineer, UI developer<span>&bull;</span> <em className="date">Oct 2019 - Present</em></p>
              <p>
              Product: Syncron Price analytics tool
              Role​: UI Developer
              Description​: Our team was responsible to build an application for the customers to display statistical visualization on the after-sales data
              </p>
            </div>
          </div>
          <br />
          <div className="row item">
             <div className="twelve columns">
                <h3>JiffleNow</h3>
                <p className="info">Senior Software Engineer, UI developer<span>&bull;</span> <em className="date">Jun 2017 - Sept 2019</em></p>
                <p>
                 Product: ​Jifflenow iris application Main Feature with the product​: External Integrations
                 Role​: UI Developer
                 Description​: Our team was responsible to integrate our application with external CRM tools including Salesforce
                 </p>
                 <p>
                 Product: ​Jifflenow iris application Main Feature with the product​: Core UI/UX team
                 Role​: UI Developer
                 Description​: The core UI development team of the application. Responsible for introducing new UI features and also responsible in migrating few old features to ​React
                </p>
             </div>
          </div>
          <br />
          <div className="row item">
             <div className="twelve columns">
                <h3>Oracle CGBU</h3>
                <p className="info">Associate Software Engineer<span>&bull;</span> <em className="date">Oct 2015 - Jun 2017</em></p>
                <p>
                   Product​: Collaboration Cloud Administration Console
                   Role​: UI Developer
                   Description​: An Admin tool to manage all the resources within their organization
                   </p>
                   <p>
                   Product​: Convergence
                   Role​: UI Developer
                   Description​: An enterprise Mail client application
                </p>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Work;

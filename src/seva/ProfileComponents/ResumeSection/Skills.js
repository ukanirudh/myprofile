import React from 'react'
import { Rating } from 'semantic-ui-react'

const Skills = () => {
  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="bars">
          <h2>Primary Skillset</h2>
          <div className="row">
            <div className="six columns main-col">
              <ul className="skills">
                <li><span>Javascript</span><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></li>
                <li><span>React</span><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></li>
                <li><span>Redux</span><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></li>
                <li><span>Angular</span><Rating size={'huge'} defaultRating={3} maxRating={5} disabled /></li>
              </ul>
            </div>
            <div className="six columns main-col">
              <ul className="skills">
                <li><span>CSS</span><Rating size={'huge'} defaultRating={3.5} maxRating={5} disabled /></li>
                <li><span>HTML</span><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></li>
                <li><span>jQuery</span><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="bars">
          <h2>Skills acquired on personal interest</h2>
          <ul className="skills">
            <li><span>Basics of React Native</span></li>
            <li><span>Webpack bundling</span></li>
            <li><span>UI libraries for React, Ant, semantic-ui, bootstrap, Redux-forms</span></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Skills;

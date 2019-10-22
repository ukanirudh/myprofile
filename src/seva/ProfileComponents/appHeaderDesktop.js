import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

const AppHeaderDesktop = (props) => {
  const {fixed} = props
  return (
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={!fixed}
      secondary={!fixed}
      size='large'
      className={`semantic-menu-header ${fixed ? 'dark-font' : 'bright-font'}`}
    >
      <Container className='justify-flex-center'>
        <Menu.Item><a className="smoothscroll" href="#">Home</a></Menu.Item>
        <Menu.Item><a className="smoothscroll" href="#about">About</a></Menu.Item>
        <Menu.Item><a className="smoothscroll" href="#resume">Resume</a></Menu.Item>
        <Menu.Item><a className="smoothscroll" href="#portfolio">Works</a></Menu.Item>
        <Menu.Item><a className="smoothscroll" href="#testimonials">Testimonials</a></Menu.Item>
        <Menu.Item><a className="smoothscroll" href="#contact">Contact</a></Menu.Item>
      </Container>
    </Menu>
  )
}
/*
<Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>
<Menu.Item><NavLink to="/about">About</NavLink></Menu.Item>
<Menu.Item><NavLink to="/resume">Resume</NavLink></Menu.Item>
<Menu.Item><NavLink to="/portfolio">Works</NavLink></Menu.Item>
<Menu.Item><NavLink to="/testimonials">Testimonials</NavLink></Menu.Item>
*/
export default AppHeaderDesktop;

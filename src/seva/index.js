import React from 'react'
import {TradingApp} from './App'
import { HashRouter } from "react-router-dom";
import './trading.scss'

const trading = () => {
  return (
    <HashRouter>
      <TradingApp />
    </HashRouter>
  )
}

export default trading;

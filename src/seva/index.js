import React from 'react'
import {TradingApp} from './App'
import { HashRouter } from "react-router-dom";
import './trading.scss'
import 'pure-react-carousel/dist/react-carousel.es.css';

const trading = () => {
  return (
    <HashRouter>
      <TradingApp />
    </HashRouter>
  )
}

export default trading;

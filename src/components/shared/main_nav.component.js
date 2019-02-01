import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { navy } from '../../style/colors'

const Wrapper = styled.div`
  z-index: 1000;
  background: ${navy};
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 

  h1 {
    margin: 0 0.5em;
    color: white;
  }

  a {
    position: relative;
    color: white;
    font-size: 36px;
    margin: 0 20px;  
    padding: 0 4px 4px;
    text-decoration: none;
  }

  div > a {
    position: relative;
    color: white;
    font-size: 14px;
    margin: 0 20px;  
    padding: 0 4px 4px;
    text-decoration: none;
  }
`

const MainNav = () => (
  <Wrapper>
    <Link to="/">twang</Link>
    <div>
      <Link to="https://github.com/d-stew">github</Link>
      <Link to="https://www.linkedin.com/in/danielstew/">linkedin</Link>
    </div>
  </Wrapper>
)

export default MainNav
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { navy } from '../../style/colors'

const Wrapper = styled.div`
  background: ${navy};
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    margin: 0 0.5em;
    color: white;
  }

  a {
    position: relative;
    color: white;
    margin: 0 20px;  
    padding: 0 4px 4px;
    text-decoration: none;

    &:hover {
      color: white;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.2s ease-in-out 0s;
      transition: all 0.2s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`

const MainNav = () => (
  <Wrapper>
    <h1>twang</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/sentiment-analysis">Dashboard</Link>
    </div>
  </Wrapper>
)

export default MainNav
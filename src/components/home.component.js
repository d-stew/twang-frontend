import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  div {
    display: flex;
    flex: 1 100%;
    justify-content: center;    

    border: 1px solid lightgrey;
    border-radius: 2px;
    margin: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    color: black;
    font-weight: 600;
    width: 100%;
    text-decoration: none;
  }
`

export const Home = () => {
  return (
    <Wrapper>
      <div>
        <p>
          <Link to="/sentiment-analysis">Sentiment Analysis</Link>
        </p>
      </div>
      <div>
        <p>
          <Link to="/geography">Geography</Link>
        </p>
      </div>
      <div>
        <p>
          <Link to="/historical">Historical Trends</Link>
        </p>
      </div>
    </Wrapper>
  )
}

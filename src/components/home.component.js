import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  FaSearch,
  FaLanguage,
  FaMapPin,
  FaFlag,
  FaSlackHash,
  FaGlobeAmericas,
  FaHistory,
  FaUsers,
  FaRegChartBar,
  FaChartLine,
  FaChartArea,
  FaTrophy,
  FaChartPie,
  FaCalendarAlt,
  FaHourglassHalf,
  FaStopwatch
} from 'react-icons/fa'

import { navy, twitterBlue } from '../style/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  a {
    color: black;
    font-weight: 600;
    width: 100%;
    text-decoration: none;
  }
`

const HeaderRow = styled.div`
  width: 100%;
  height: 450px;
  background: url('https://imgur.com/a7igXkL.jpg');
  background-size: cover;
  text-align: center;
  color: white;

  h1 {
    margin-bottom: 0.25em;
  }

  p {
    margin: 0.25em;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:nth-of-type(2) {
    flex-grow: 1;
    align-items: center;
  }
`

const RowBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 100%;
  align-items: center;
  margin: 1em;

  h2 {
    margin: 0.5em 0;
  }

  p {
    color: darkgrey;
    text-align: center;
    margin: 0;
  }

  ul {
    padding-left: 0;

    li {
      color: darkgrey;
      test-align: left;
      list-style: none;
      margin: 0;
    }
  }

  .icon1 {
    background: #364a6d;
  }

  .icon2 {
    background: #7a9cd9;
  }

  .icon3 {
    background: #2771da;
  }

  .icon4 {
    background: #012b81;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;
  width: 5em;
  border-radius: 50%;
  background: ${twitterBlue};
`

const ButtonLink = styled(Link)`
  max-width: 400px;
  text-align: center;
  background: #63e5f9;
  color: white !important;
  padding: 15px 100px;
  margin-bottom: 2em;
  border-radius: 4px;

  background-color: #cef8ff;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#cef8ff), to(#7fe0f8));
  background-image: -webkit-linear-gradient(top, #cef8ff, #7fe0f8);
  background-image: -moz-linear-gradient(top, #cef8ff, #7fe0f8);
  background-image: -ms-linear-gradient(top, #cef8ff, #7fe0f8);
  background-image: -o-linear-gradient(top, #cef8ff, #7fe0f8);
  background-image: linear-gradient(to bottom, #cef8ff, #7fe0f8);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#cef8ff, endColorstr=#7fe0f8);

  &:hover {
    cursor: pointer;
    background-color: #9bf1ff;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#9bf1ff), to(#4fd4f5));
    background-image: -webkit-linear-gradient(top, #9bf1ff, #4fd4f5);
    background-image: -moz-linear-gradient(top, #9bf1ff, #4fd4f5);
    background-image: -ms-linear-gradient(top, #9bf1ff, #4fd4f5);
    background-image: -o-linear-gradient(top, #9bf1ff, #4fd4f5);
    background-image: linear-gradient(to bottom, #9bf1ff, #4fd4f5);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#9bf1ff, endColorstr=#4fd4f5);
  }
`

const StyledItem = styled.li`
  svg {
    color: black;
    margin-right: 0.75em;
  }
`

const Logo = styled.h1`
  position: absolute;
  text-align: left;
  margin: 0 0 0 0.5em;
  font-size: 56px;
`

export const Home = () => {
  return (
    <Wrapper>
      <HeaderRow>
        <Logo>twang</Logo>
        <h1>Twitter analytics made easy.</h1>
        <p>Real-time insights at the tip of your fingers.</p>
      </HeaderRow>
      <Row>
        <RowBox>
          <IconWrapper className="icon1">
            <FaUsers color={'white'} size={'2em'} />
          </IconWrapper>
          <h2>User Insights</h2>
          <p>Analytics and reporting for public accounts.</p>
          <ul>
            <StyledItem>
              <FaTrophy /> Top posts by engagement
            </StyledItem>
            <StyledItem>
              <FaChartLine /> Growth & interaction metrics
            </StyledItem>
            <StyledItem>
              <FaStopwatch /> Post frequency & timing
            </StyledItem>
          </ul>
        </RowBox>
        <RowBox>
          <IconWrapper className="icon2">
            <FaHistory color={'white'} size={'2em'} />
          </IconWrapper>
          <h2>Historical Trends</h2>
          <p>Follow the rise and fall of a hashtag over time.</p>
          <ul>
            <StyledItem>
              <FaChartArea /> Lifecycle visualization
            </StyledItem>
            <StyledItem>
              <FaCalendarAlt /> Engagement metrics by day, week, month
            </StyledItem>
            <StyledItem>
              <FaHourglassHalf /> "Staying Power" analysis
            </StyledItem>
          </ul>
        </RowBox>
        <RowBox>
          <IconWrapper className="icon3">
            <FaRegChartBar color={'white'} size={'2em'} />
          </IconWrapper>
          <h2>Real-Time Analysis</h2>
          <p>Gauge current sentiment with IBM Watson.</p>
          <ul>
            <StyledItem>
              <FaChartPie /> Emotional content breakdown
            </StyledItem>
            <StyledItem>
              <FaLanguage /> Engagement & sentiment by language
            </StyledItem>
            <StyledItem>
              <FaSlackHash /> Top related hashtags
            </StyledItem>
          </ul>
        </RowBox>
        <RowBox>
          <IconWrapper className="icon4">
            <FaGlobeAmericas color={'white'} size={'2em'} />
          </IconWrapper>
          <h2>Geographic Analysis</h2>
          <p>Find geographic hotspots for specific hashtags.</p>
          <ul>
            <StyledItem>
              <FaFlag /> Top engagement by country
            </StyledItem>
            <StyledItem>
              <FaMapPin /> Real-time map plotting
            </StyledItem>
            <StyledItem>
              <FaSearch /> Which hashtags are the "most global"?
            </StyledItem>
          </ul>
        </RowBox>
      </Row>
      <Row>
        <ButtonLink to="/dashboard">Launch Twang</ButtonLink>
      </Row>
    </Wrapper>
  )
}

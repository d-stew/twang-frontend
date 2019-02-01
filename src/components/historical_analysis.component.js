import React, { Component } from 'react'
import styled from 'styled-components'

import { navy, arctic } from '../style/colors'
import {AngryBlob} from '../style/assets/blob_angry';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.25em;

  span {
    font-size: 18px;
    font-weight: 300;
    position: relative;
    color: ${navy};
    margin: 0 20px;
    padding: 0 4px 4px;
    text-decoration: none;

    &.active:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    &.inactive {
      color: lightgrey;
    }

    &.live:hover {
      cursor: pointer;
      color: ${navy};
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${arctic};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.2s ease-in-out 0s;
      transition: all 0.2s ease-in-out 0s;
    }

    &.live:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`

const HeaderInput = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .placeholder {
    position: relative;
  }

  .placeholder::after {
    color: gray;
    position: absolute;
    left: 32px;
    top: 9px;
    content: attr(data-placeholder);
    pointer-events: none;
  }

  input {
    width: 300px;
    height: 35px;
    margin: 0 1em;
    padding: 20px 0;
    border: 1px solid lightgrey;
    border-radius: 25px;
    text-indent: 32px;

    ::placeholder {
      color: lightgrey;
      padding-left: 6px;
      text-indent: 0;
    }
  }

  button {
    color: white;
    background: ${arctic};
    padding: 6px 20px;
    border: none;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
    }
  }
`

const EmptyStateModule = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  text-align: center;

  div > h3 {
    color: ${navy};

    &:first-of-type {
      color: ${arctic};
    }
  }
`

export default class HistoricalAnalysis extends Component {
  getClasses(submodule) {
    if (submodule === 'realTime') {
      return 'inactive'
    }
    return this.state.submodule === submodule ? 'active' : 'live'
  }

  toggleSubmodule(submodule) {
    this.setState({ submodule })
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <HeaderInput>
            <form className="placeholder" data-placeholder="#">
              <input type="text" />
              <button type="submit">View Hashtag History</button>
            </form>
          </HeaderInput>
        </Header>
        <EmptyStateModule>
          <div>
            <h3>They say history repeats itself.</h3>
            <h3>So I know "Coming Soon" means 2 weeks.</h3>
            <AngryBlob color={arctic} />
          </div>
        </EmptyStateModule>
      </Wrapper>
    )
  }
}

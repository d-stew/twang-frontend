import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { RaisedHandBlob } from '../style/assets/blob_raised_hand'
import { getUserData } from '../redux/actions/user_insights.actions'
import { UserMap } from '../redux/selectors/index.selectors'
import { TopTweets } from './top_tweets_module.component'
import { arctic, navy } from '../style/colors'

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow: auto;
  display: flex;
  flex-direction: column;

  svg {
    max-height: 250px !important;
  }

  h3 {
    color: ${navy};
  }
`

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1.25em;

  span {
    font-size: 18px;
    font-weight: 400;
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

    &:hover {
      cursor: pointer;
      color: ${navy};
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${navy};
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

const MainModule = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-y: scroll;
`

const EmptyStateModule = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export class UserInsights extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    submodule: 'topTweets',
    username: undefined,
    usernameSet: false,
    userData: undefined
  }

  getClasses(submodule) {
    return this.state.submodule === submodule ? 'active' : ''
  }

  handleChange(event) {
    this.setState({ username: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ usernameSet: true })

    this.props.getUserData(this.state.username)
  }

  toggleSubmodule(submodule) {
    this.setState({ submodule })
  }

  render() {
    const { userData } = this.props
    const { submodule } = this.state

    return (
      <Wrapper>
        <Header>
          <span onClick={() => this.toggleSubmodule('topTweets')} className={this.getClasses('topTweets')}>TOP TWEETS</span>
          <span onClick={() => this.toggleSubmodule('userGrowth')} className={this.getClasses('userGrowth')}>USER GROWTH</span>
          <span onClick={() => this.toggleSubmodule('timing')} className={this.getClasses('timing')}>FREQUENCY & TIMING</span>
          <HeaderInput>
            <form onSubmit={this.handleSubmit} className="placeholder" data-placeholder="@">
              <input type="text" onChange={this.handleChange} />
              <button type="submit">Analyze User</button>
            </form>
          </HeaderInput>
        </Header>
        {isEmpty(userData) ? (
          <EmptyStateModule>
            <RaisedHandBlob color={arctic} />
            <h3>Howdy, bubba! Search for a username above to get started.</h3>
          </EmptyStateModule>
        ) : (
          <MainModule>
            {submodule === 'topTweets' && <TopTweets userData={userData} />}
          </MainModule>
        )}
      </Wrapper>
    )
  }
}

export default connect(
  UserMap,
  { getUserData }
)(UserInsights)

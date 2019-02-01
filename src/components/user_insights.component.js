import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { RaisedHandBlob } from '../style/assets/blob_raised_hand'
import { getUserData } from '../redux/actions/user_insights.actions'
import { UserMap } from '../redux/selectors/index.selectors'
import { TopTweetsTable } from './top_tweets_module.component'
import { arctic, navy } from '../style/colors'

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;

  svg {
    max-height: 250px !important;
  }

  h3 {
    color: ${navy};
  }
`

const MainModule = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.25em 2em;

  .placeholder {
    position: relative;
  }

  .placeholder::after {
    color: gray;
    position: absolute;
    left: 24px;
    top: 5px;
    content: attr(data-placeholder);
    pointer-events: none;
  }

  input {
    width: 300px;
    height: 35px;
    margin: 0 1em;
    border: 1px solid lightgrey;
    border-radius: 2px;
    text-indent: 24px;

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
`

export class UserInsights extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    username: undefined,
    usernameSet: false,
    userData: undefined
  }

  handleChange(event) {
    this.setState({ username: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ usernameSet: true })

    this.props.getUserData(this.state.username)
  }

  render() {
    const { userData } = this.props

    console.log('USER DATA IN COMPONENT', userData)

    return (
      <Wrapper>
        <Header>
          <form onSubmit={this.handleSubmit} class="placeholder" data-placeholder="@">
            <input type="text" onChange={this.handleChange} />
            <button type="submit">Analyze User</button>
          </form>
        </Header>
        {isEmpty(userData) ? (
          <EmptyStateModule>
            <RaisedHandBlob color={arctic} />
            <h3>Hey bubba! Search for a username above to get started.</h3>
          </EmptyStateModule>
        ) : (
          <MainModule>{userData && <TopTweetsTable userData={userData} />}</MainModule>
        )}
      </Wrapper>
    )
  }
}

export default connect(
  UserMap,
  { getUserData }
)(UserInsights)

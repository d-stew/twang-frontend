import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getUserData } from '../redux/actions/user_insights.actions'
import { UserMap } from '../redux/selectors/index.selectors'
import { TopTweetsTable } from './top_tweets_table.component'
import { arctic } from '../style/colors'

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainModule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.75em 2em;

  input {
    width: 300px;
    height: 35px;
    margin: 0 1em;
    border: 1px solid lightgrey;
    border-radius: 2px;

    ::placeholder {
      color: lightgrey;
      padding-left: 6px;
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

    return(
      <Wrapper>
        <Header>
          <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Search by username" onChange={this.handleChange} />
              <button type="submit">Analyze User</button>
          </form>
        </Header>
        <MainModule>
          {userData && <TopTweetsTable userData={userData} />}
        </MainModule>
      </Wrapper>
    )
  }
}

export default connect(
  UserMap,
  { getUserData }
)(UserInsights)
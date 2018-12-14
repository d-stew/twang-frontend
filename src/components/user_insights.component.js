import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getUserData } from '../redux/actions/user_insights.actions'
import { UserMap } from '../redux/selectors/index.selectors'
import { arctic } from '../style/colors'

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    return(
      <Wrapper>
        <Header>
          <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Search by username" onChange={this.handleChange} />
              <button type="submit">Analyze User</button>
          </form>
        </Header>
      </Wrapper>
    )
  }
}

export default connect(
  UserMap,
  { getUserData }
)(UserInsights)
import React, { Component } from 'react'
import FormSignUp from './FormSignUp'
import UserTable from './UserTable'

export default class UserManagement extends Component {
  render() {
    return (
      <div>
        <FormSignUp/>
        <UserTable/>
      </div>
    )
  }
}

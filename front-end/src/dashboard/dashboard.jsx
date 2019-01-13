import React, { Component } from 'react'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão Beta"/>
        <Content>
          Dashboard
        </Content>
      </div>
    )
  }
}

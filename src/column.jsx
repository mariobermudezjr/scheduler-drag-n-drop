import React from 'react'
import styled from 'styled-components'
import Proposal from './proposal'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
    padding 8px;
`

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <TaskList>
          {this.props.proposals.map((proposal) => (
            <Proposal key={proposal.id} proposal={proposal} />
          ))}
        </TaskList>
      </Container>
    )
  }
}

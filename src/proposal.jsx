import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`

export default class Proposal extends React.Component {
  render() {
    const {
      projectType,
      numPanel,
      brandPanel,
      numMicro,
      brandInverter,
      proposalUrl,
      customerName,
      crewDate,
      crewName,
      projectAddress,
      customerConfirmed,
      crewConfirmed,
    } = this.props.proposal
    return (
      <Container>
        {projectType} {numPanel}
        {brandPanel}
        {numMicro}
        {brandInverter}
        {proposalUrl}
        {customerName}
        {crewDate}
        {crewName}
        {projectAddress}
        {customerConfirmed}
        {crewConfirmed}
      </Container>
    )
  }
}

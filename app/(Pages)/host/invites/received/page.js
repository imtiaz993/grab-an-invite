import React from 'react'
import InvitesContainer from './components/invitesContainer'

const ReceivedInvites = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold mb-6">Received Invites</h1>
      <InvitesContainer />
    </div>
  )
}

export default ReceivedInvites
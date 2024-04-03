import React from 'react'
import InvitesContainer from './components/invitesContainer'

const Invites = () => {
  return (
    <div className="mx-7 mt-20 text-dark">
      <h1 className="text-4xl font-bold mb-6">Invited Events</h1>
      <InvitesContainer />
    </div>
  )
}

export default Invites
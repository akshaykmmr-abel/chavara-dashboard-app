'use client'

import { useEffect, useState } from 'react'
import { getMembershipStatus } from '../services/membershipService'
import { MembershipPlan } from '../types/membership'

export function MembershipStatus() {
  const [membership, setMembership] = useState<MembershipPlan | null>(null)

  useEffect(() => {
    getMembershipStatus().then(setMembership)
  }, [])

  if (!membership) return <div>Loading...</div>

  return (
    <section>
      <h2>Membership Status</h2>
      <p>Plan: {membership.planName}</p>
      <p>Status: {membership.status}</p>
      <p>Expires: {new Date(membership.expiresAt).toLocaleDateString()}</p>
    </section>
  )
}

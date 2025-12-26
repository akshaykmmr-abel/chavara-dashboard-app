import { MembershipPlan } from '../types/membership'

export async function getMembershipStatus(): Promise<MembershipPlan> {
  const response = await fetch(`${process.env.BACKEND_API_URL}/api/membership`, {
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch membership')
  }

  return response.json()
}

export async function upgradeMembership(planId: string): Promise<void> {
  const response = await fetch(`${process.env.BACKEND_API_URL}/api/membership/upgrade`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ planId }),
  })

  if (!response.ok) {
    throw new Error('Failed to upgrade membership')
  }
}

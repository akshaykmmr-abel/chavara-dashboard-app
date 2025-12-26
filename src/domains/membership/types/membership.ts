export interface MembershipPlan {
  id: string
  planName: string
  status: 'active' | 'expired' | 'cancelled'
  startedAt: string
  expiresAt: string
  features: string[]
}

import { ProfileSummary } from '@domains/profile/ui/ProfileSummary'
import { RecentMatches } from '@domains/search/ui/RecentMatches'
import { MembershipStatus } from '@domains/membership/ui/MembershipStatus'

export default function DashboardPage() {
  return (
    <main>
      <h1>Welcome to Your Dashboard</h1>
      <ProfileSummary />
      <MembershipStatus />
      <RecentMatches />
    </main>
  )
}

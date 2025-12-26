'use client'

import Link from 'next/link'
import { LogoutButton } from './LogoutButton'

export function DashboardNav() {
  return (
    <nav>
      <Link href="/">Dashboard</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/search">Search</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/membership">Membership</Link>
      <LogoutButton />
    </nav>
  )
}

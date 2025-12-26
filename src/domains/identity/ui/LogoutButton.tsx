'use client'

import { logout } from '../services/authService'

export function LogoutButton() {
  const handleLogout = async () => {
    await logout()
    window.location.href = process.env.NEXT_PUBLIC_PUBLIC_WEB_URL || 'https://chavaramatrimony.com'
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  )
}

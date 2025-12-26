import type { Metadata } from 'next'
import { DashboardNav } from '@domains/identity/ui/DashboardNav'

export const metadata: Metadata = {
  title: 'Dashboard - Chavara Matrimony',
  description: 'Manage your matrimony profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DashboardNav />
        {children}
      </body>
    </html>
  )
}

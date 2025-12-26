'use client'

import { useEffect, useState } from 'react'
import { getProfile } from '../services/profileService'
import { Profile } from '../types/profile'

export function ProfileSummary() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch(() => setProfile(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading profile...</div>
  if (!profile) return <div>Unable to load profile</div>

  return (
    <section>
      <h2>Your Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Chavara ID: {profile.chavaraId}</p>
      <p>Gender: {profile.gender}</p>
    </section>
  )
}

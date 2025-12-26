import { Profile } from '../types/profile'

const BACKEND_URL = 'https://finder-api.chavaramatrimony.org'

export async function getProfile(): Promise<Profile> {
  const token = document.cookie.split('; ').find(row => row.startsWith('auth_token='))?.split('=')[1]
  
  const response = await fetch(`${BACKEND_URL}/api/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch profile')
  }

  const data = await response.json()
  return data.candidates?.[0] || data
}

export async function updateProfile(data: Partial<Profile>): Promise<Profile> {
  const token = document.cookie.split('; ').find(row => row.startsWith('auth_token='))?.split('=')[1]
  
  const response = await fetch(`${BACKEND_URL}/api/profile`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to update profile')
  }

  return response.json()
}

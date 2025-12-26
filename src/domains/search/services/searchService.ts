import { Match, SearchCriteria } from '../types/search'

export async function getRecentMatches(): Promise<Match[]> {
  const response = await fetch(`${process.env.BACKEND_API_URL}/api/matches/recent`, {
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch matches')
  }

  return response.json()
}

export async function searchMatches(criteria: SearchCriteria): Promise<Match[]> {
  const response = await fetch(`${process.env.BACKEND_API_URL}/api/matches/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(criteria),
  })

  if (!response.ok) {
    throw new Error('Failed to search matches')
  }

  return response.json()
}

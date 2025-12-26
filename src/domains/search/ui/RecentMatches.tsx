'use client'

import { useEffect, useState } from 'react'
import { getRecentMatches } from '../services/searchService'
import { Match } from '../types/search'

export function RecentMatches() {
  const [matches, setMatches] = useState<Match[]>([])

  useEffect(() => {
    getRecentMatches().then(setMatches)
  }, [])

  return (
    <section>
      <h2>Recent Matches</h2>
      <div>
        {matches.map((match) => (
          <div key={match.id}>
            <h3>{match.name}</h3>
            <p>{match.age} years, {match.location}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

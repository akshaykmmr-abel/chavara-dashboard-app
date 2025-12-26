export interface Match {
  id: string
  name: string
  age: number
  location: string
  education: string
  occupation: string
  matchScore: number
}

export interface SearchCriteria {
  ageMin?: number
  ageMax?: number
  location?: string
  education?: string
  occupation?: string
}

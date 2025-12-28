type Activity = {
  id: string
  title: string
  date: Date
  description: string
  category: string
  isCancelled: boolean
  city: string
  venue: string
  latitude: number
  longitude: number
}

export type LocationIQSuggestion = {
  place_id: string
  licence: string
  osm_type: string
  osm_id: string
  boundingbox: string[]
  lat: string
  lon: string
  display_name: string
  class: string
  type: string
  importance: number
  icon: string
  address: LocationIQAddress
}

export type LocationIQAddress = {
  attraction: string
  house_number: string
  road: string
  neighbourhood: string
  suburb: string
  county: string
  city?: string
  town?: string
  village?: string
  state: string
  postcode: string
  country: string
  country_code: string
}

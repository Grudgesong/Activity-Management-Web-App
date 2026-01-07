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
  attendees: Profile[]
  isGoing: boolean
  isHost: boolean
  hostId: string
  hostDisplayName: string
}

type Profile = {
  id: string
  displayName: string
  bio?: string
  imageUrl?: string
}

type LocationIQSuggestion = {
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
type LocationIQAddress = {
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

type User = {
  id: string
  email: string
  displayName: string
  imageUrl?: string
}

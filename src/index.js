export { getStockNames, getMapping } from './getMappings'
export { storeMapping, removeMapping, getUserMappingNames, validateContent } from './userMappings'

export const getAvailableGroups = () => [
  { value: 'all', label: 'All groups' },
  { value: 'Cymbal', label: 'Cymbals' },
  { value: 'Hi-hat', label: 'Hi-hats' },
  { value: 'Kick', label: 'Kicks' },
  { value: 'Percussion', label: 'Percussion' },
  { value: 'Ride', label: 'Rides' },
  { value: 'Snare', label: 'Snares' },
  { value: 'Tom', label: 'Toms' },
]

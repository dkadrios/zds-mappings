export { getStockNames, getMapping } from './getMappings'
export {
  storeMapping,
  removeMapping,
  getUserMappingNames,
  validateContent,
  editUserMapping,
  createUserMapping,
  renameUserMapping,
  cloneMapping,
  getNextAvailableMappingName,
} from './userMappings'

export const getAvailableGroups = () => [
  { value: 'all', label: 'All groups' },
  { value: 'Cymbals', label: 'Cymbals' },
  { value: 'Hats', label: 'Hi-hats' },
  { value: 'Kicks', label: 'Kicks' },
  { value: 'Perc', label: 'Percussion' },
  { value: 'Rides', label: 'Rides' },
  { value: 'Snares', label: 'Snares' },
  { value: 'Toms', label: 'Toms' },
  { value: 'Groove', label: 'Groove' },
]

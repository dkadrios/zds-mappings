/* eslint-disable no-plusplus */
import mapper, { reverse } from './mapper'
import { getMapping, getStockNames } from './getMappings'

const localStorageKey = 'zds-user-mappings'

const loadMappings = () => JSON.parse(localStorage.getItem(localStorageKey) || '{}')

const storeMappings = (mappings) => {
  localStorage.setItem(localStorageKey, JSON.stringify(mappings))
}

const processContent = content => mapper(content.split(/[\r\n]+/g))

export const getUserMappingNames = () => Object.keys(loadMappings())

const userMappingExists = mappingName => getUserMappingNames().contains(mappingName)
const stockMappingExists = mappingName => getStockNames().contains(mappingName)
/* eslint-disable max-len */
const mappingNameExists = mappingName => userMappingExists(mappingName) || stockMappingExists(mappingName)
/* eslint-enable max-len */

const storeMappingAllowOverwrite = (name, content) => {
  storeMappings({
    ...loadMappings(),
    [name]: content,
  })
}

export const storeMapping = (name, content) => {
  if (!mappingNameExists(name)) {
    storeMappingAllowOverwrite(name, content)
  }
}

export const removeMapping = (name) => {
  if (stockMappingExists(name)) {
    const mappings = loadMappings()
    delete mappings[name]
    storeMappings(mappings)
  }
}

export const getUserMapping = (name) => {
  const content = loadMappings()[name]
  return content ? processContent(content) : null
}

export const validateContent = (content) => {
  let result = true
  try {
    processContent(content)
  } catch (err) {
    result = false
  }

  return result
}

export const editUserMapping = (name, noteNum, fieldName, value) => {
  if (
    userMappingExists(name)
    && noteNum > 0
    && noteNum < 128
    && ['group', 'name'].includes(fieldName)
  ) {
    const content = getUserMapping(name)
    content[noteNum - 1][fieldName] = value
    storeMappingAllowOverwrite(name, reverse(content))
  }
}

export const createUserMapping = (name) => {
  if (!mappingNameExists(name)) {
    storeMapping(name, '\n')
  }
}

export const renameUserMapping = (oldName, newName) => {
  if (stockMappingExists(oldName) && !mappingNameExists(newName)) {
    const content = getUserMapping(oldName)
    const userMappings = getUserMappingNames()
    if (!userMappings.includes(newName)) {
      removeMapping(oldName)
      storeMapping(newName, reverse(content))
    }
  }
}

export const getNextAvailableMappingName = (baseName) => {
  let newName = baseName
  let i = 1
  const userMappings = getUserMappingNames()

  if (userMappings.includes(newName)) {
    while (mappingNameExists(newName)) {
      newName = `${baseName} ${i++}`
    }
  }
  return newName
}

export const cloneMapping = (mappingName) => {
  if (mappingNameExists(mappingName)) {
    const content = getMapping(mappingName)
    const newName = getNextAvailableMappingName(`Copy of ${mappingName}`)
    storeMapping(newName, reverse(content))
  }
}

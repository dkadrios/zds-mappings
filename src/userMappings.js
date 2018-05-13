import mapper from './mapper'

const localStorageKey = 'zds-user-mappings'

const loadMappings = () => JSON.parse(localStorage.getItem(localStorageKey))

const storeMappings = (mappings) => {
  localStorage.setItem(localStorageKey, JSON.stringify(mappings))
}

export const storeMapping = (name, content) => {
  const mappings = loadMappings()
  mappings[name] = mapper(content.split(/[\r\n]+/g))
  storeMappings(mappings)
}

export const removeMapping = (name) => {
  const mappings = loadMappings()
  delete mappings[name]
  storeMappings(mappings)
}

export const getUserMappingNames = () => Object.keys(loadMappings())

export const getUserMapping = name => loadMappings()[name]

const processContent = contents => mapper(contents.split(/[\r\n]+/g))

export const validateContent = (content) => {
  let result = true
  try {
    processContent(content)
  } catch (err) {
    result = false
  }

  return result
}

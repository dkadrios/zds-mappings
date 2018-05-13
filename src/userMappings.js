import mapper from './mapper'

const localStorageKey = 'zds-user-mappings'

const loadMappings = () => JSON.parse(localStorage.getItem(localStorageKey) || '{}')

const storeMappings = (mappings) => {
  localStorage.setItem(localStorageKey, JSON.stringify(mappings))
}

const processContent = content => mapper(content.split(/[\r\n]+/g))

export const storeMapping = (name, content) =>
  storeMappings({
    ...loadMappings(),
    [name]: content,
  })

export const removeMapping = (name) => {
  const mappings = loadMappings()
  delete mappings[name]
  storeMappings(mappings)
}

export const getUserMappingNames = () => Object.keys(loadMappings())

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

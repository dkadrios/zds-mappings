/* eslint-disable import/no-extraneous-dependencies */
const rimraf = require('rimraf')
const modify = require('gulp-modify')
const extReplace = require('gulp-ext-replace')
const fs = require('fs')

module.exports = (gulp) => {
  const inputPath = `${process.cwd()}/raw_files/*.txt`
  const outputPath = `${process.cwd()}/src/mappings/`
  const indexPath = `${process.cwd()}/src/getMappings.js`

  gulp.task('clean', (cb) => {
    rimraf(outputPath, f => f)
    cb()
  })

  gulp.task('build:files', (cb) => {
    gulp
      .src(inputPath)
      .pipe(modify({
        fileModifier: (file, contents) => `import mapper from '../mapper'\n\nexport default mapper([\n${contents
          .trim()
          .split('\n')
          .map(line => line.replace("'", "\\'"))
          .map(line => `  '${line}',`)
          .join('\n')}\n])\n`,
      }))
      .pipe(extReplace('.js'))
      .pipe(gulp.dest(outputPath))
    cb()
  })

  gulp.task('build:index', (cb) => {
    let result = `
/* eslint-disable quote-props */
import { getUserMapping } from './userMappings'
`
    const files = fs.readdirSync(outputPath)
    const fileNames = files.map(file => file.replace('.js', ''))

    fs.unlinkSync(indexPath)
    files.forEach((file, idx) => {
      result += `import F${idx} from './mappings/${file}'\n`
    })

    result += '\nexport const getStockNames = () => ([\n'

    result += fileNames.map(file => `  '${file}',`).join('\n')

    result += `
])

export const getMapping = (name) => {
  const userMapping = getUserMapping(name)
  if (userMapping) {
    return userMapping
  }

  switch (name) {
`

    result += fileNames.map((file, idx) => `    case '${file}': return F${idx}`).join('\n')

    result += '\n    default: return null\n  }\n}\n'

    fs.writeFile(indexPath, result, cb)
  })

  gulp.task(
    'build',
    'Turns the raw files into js versions.',
    ['clean', 'build:files', 'build:index'],
    cb => cb && cb(),
  )
}

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
        fileModifier: (file, contents) =>
          `import mapper from '../mapper'\n\nexport default mapper([\n${contents
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
    let result = '/* eslint-disable camelcase */\n'
    const files = fs.readdirSync(outputPath)
    const fileNames = files.map(file => file.replace('.js', ''))
    const importNames = files
      .map(file => file.replace('.js', ''))
      .map(file => file.replace(/ /g, ''))
      .map(file => file.replace(/-/g, '_'))
      .map(file => file.replace(/\(/g, '_'))
      .map(file => file.replace(/\)/g, '_'))
      .map(file => file.replace(/\./g, '_'))
      .map(file => file.replace('2box', '_2box'))
    fs.unlinkSync(indexPath)
    files.forEach((file, idx) => {
      result += `import ${importNames[idx]} from './mappings/${file}'\n`
    })

    result += '\nconst getMappings = () => [\n'

    result += `${fileNames.map((file, idx) => `  '${file}': ${importNames[idx]}`).join(',\n')},\n`

    result += ']\nexport default getMappings\n'

    fs.writeFile(indexPath, result, cb)
  })

  gulp.task(
    'build',
    'Turns the raw files into js versions.',
    ['clean', 'build:files', 'build:index'],
    cb => cb && cb(),
  )
}

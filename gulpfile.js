const gulp = require('gulp-help')(require('gulp'), {
  hideDepsMessage: true,
  hideEmpty: true,
})

require('./scripts/processRaw.js')(gulp)

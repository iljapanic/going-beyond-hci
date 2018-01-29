const gulp = require('gulp');
const sequence = require('gulp-sequence');

const buildTask = function(cb) {
	sequence('markdown', 'html', 'include', 'css', 'js', 'images', cb);
}

gulp.task('build', buildTask);
module.exports = buildTask;

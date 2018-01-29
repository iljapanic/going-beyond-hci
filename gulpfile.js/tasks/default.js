const gulp = require('gulp');
const sequence = require('gulp-sequence');

const defaultTask = function(cb) {
	sequence('markdown', 'html', 'include', 'css', 'js', 'images', 'watch', cb);
}

gulp.task('default', defaultTask);
module.exports = defaultTask;

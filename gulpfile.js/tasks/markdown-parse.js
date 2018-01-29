const browserSync = require('browser-sync');
const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const marked = require('gulp-marked');
const markdown = require('gulp-markdown-it');
const plumber = require('gulp-plumber');

// markdown-it plugis
// const implicitFigures = require('markdown-it-implicit-figures');

// markdown.use(implicitFigures, {
// 	figcaption: true
// });


const markdownParseTask = function() {
	gulp.src(config.markdown.parse.src)
		.pipe(plumber())
		.pipe(marked({}))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.markdown.parse.dest))
		.pipe(browserSync.stream());
}

gulp.task('markdown-parse', markdownParseTask);
module.exports = markdownParseTask;

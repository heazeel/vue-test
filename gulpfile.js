/*
 * @Description: 
 * @Author: linjia
 * @Date: 2020-05-21 18:25:33
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-12-17 10:35:00
 */ 
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var minifycss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var version = new Date().getTime();
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var fontmin = require('gulp-fontmin');
gulp.task('connect', function () {
  connect.server({
    root: 'build',
    port: 3300,
    livereload: true
  });
});
//scripts代码检查
gulp.task('jshint', function () {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});
//html文件搬运
gulp.task('html', function () {
  var options = {
    collapseWhitespace:true,
    collapseBooleanAttributes:true,
    removeComments:true,
    removeEmptyAttributes:true,
    removeScriptTypeAttributes:true,
    removeStyleLinkTypeAttributes:true,
    minifyJS:true,
    minifyCSS:true
  };
  gulp.src('src/*.html')
    .pipe(replace(/\{\{version\}\}/g, version))
    .pipe(htmlmin(options))
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});
//imgs图片
gulp.task('imgs', function () {
  gulp.src('src/imgs/**/*')
    .pipe(replace(/\{\{version\}\}/g, version))
    .pipe(gulp.dest('build/imgs'))
    .pipe(connect.reload());
});
//一些依赖文件的搬运
gulp.task('cpLib', function () {
  gulp.src('src/lib/**/*')
    .pipe(gulp.dest('build/lib'))
    .pipe(connect.reload());
});
//scss代码预编译s
gulp.task('sass', function(){
  return gulp.src('src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/styles'))
    .pipe(connect.reload())
});
//styles代码的压缩
gulp.task('styles', function () {
  return gulp.src('src/styles/*.css')      //设置css
  // .pipe(concat('index.css'))      //合并css文件到"order_query"
  // .pipe(gulp.dest('build/styles'))           //设置输出路径
    // .pipe(rename({suffix: '.min'}))         //修改文件名
    .pipe(minifycss())                    //压缩文件
    .pipe(gulp.dest('build/styles'))            //输出文件目录
    .pipe(connect.reload())
  // .pipe(notify({message:'css task ok'}))  //提示成功
});
//scripts代码的压缩
gulp.task('scripts', function () {
  gulp.src('src/scripts/*.js')    //设置js的路径
    // .pipe(concat('all.js'))  //合并js文件到'all.JS'
    // .pipe(gulp.dest('./build/scripts'))  //设置输出路径
    // .pipe(rename({suffix: '.min'}))   //修改文件名
    /*.pipe(uglify({
      mangle: true,//类型：Boolean 默认：true 是否修改变量名
      compress: {
        drop_console: true,
        drop_debugger: true
      },//类型：Boolean 默认：true 是否完全压缩
    }))              //压缩文件*/
    .pipe(gulp.dest('./build/scripts'))  //输出文件目录
    .pipe(connect.reload())   
  // .pipe(notify({message:'js task ok'}));  //提示成功
});
// function minifyFont(text, cb) {
//   gulp
//       .src('src/lib/font/*.otf')
//       .pipe(fontmin({
//           text: text
//       }))
//       .pipe(gulp.dest('build/lib/font/'))
//       .on('end', cb);
// }

// gulp.task('fonts', function(cb) {
//   var buffers = [];
//   gulp
//       .src('src/index.html')
//       .on('data', function(file) {
//           buffers.push(file.contents);
//       })
//       .on('end', function() {
//           var text = Buffer.concat(buffers).toString('utf-8');
//           minifyFont(text, cb);
//       });

// });
// gulp.task('fonts', function () {
//   return gulp.src('src/lib/font/*.otf')
//       .pipe(fontmin({
//         text: '应急保障TR7S能在绝大多数地面环境下完成起降能满足各类赛事的场地环境。根据实际运行数据表明无人机空中'
//         + '医疗急救网络有效避免道路障碍为赛事突发情况作出有效的快速响应'
//         + '医疗急救利用无人机安全快速的飞行优势避免了二次污染的同时节省出大量人力物力与时间赛跑守护生命航线'
//       }))
//       .pipe(gulp.dest('build/lib/font'));
// });

/*---------- 输出i18n ---------*/
gulp.task('i18n', function () {
  return gulp
    .src('src/i18n/**/*.properties')
    .pipe(gulp.dest('build/i18n/'))
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  //gulp.watch(['src/pages/**/*'], ['html']);
  gulp.watch(['src/*'], ['html']);
  //gulp.watch(['src/scripts/**/*.js'], ['js']);
  //gulp.watch(['src/scripts/**/*.js'], ['jsmin']);
  //gulp.watch(['src/styles/**/*.less'], ['less']);
  gulp.watch(['src/lib/**/*'], ['cpLib']);
  //gulp.watch(['src/imgs/**/*'], ['imgsMin']);
  //gulp.watch(['src/*.json'], ['update']);
  gulp.watch(['src/styles/*.css'],['styles']);
  gulp.watch(['src/styles/*.scss'],['sass']);
  gulp.watch(['src/imgs/*'],['imgs']);
  //gulp.watch(['src/scripts/*'],['jshint']);    
  gulp.watch(['src/scripts/*'],['scripts']);
  gulp.watch(['src/i18n/**/*'], ['i18n']);
});

gulp.task('default', ['connect', 'watch']);
gulp.task('serve', ['connect', 'watch']);
gulp.task('start', ['connect']);
gulp.task('dev', ['html', 'js', 'less', 'update']);
// gulp.task('deploy', ['html', 'less', 'jsmin', 'update']);
gulp.task('deploy', ['html', 'cpLib', 'styles','imgs','scripts', 'i18n']);

// gulp.task('default', ['html', 'js', 'less', 'cpLib', 'update', 'jsmin']);
gulp.task('deploy-all', ['html', 'less', 'cpLib', 'imgsMin', 'update', 'jsmin']);
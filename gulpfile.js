"use strict";
/**
 * Created by rocky on 16/9/22.
 */
var rollup = require('rollup')
var commonjs = require("rollup-plugin-commonjs")
var uglify = require("rollup-plugin-uglify")
var babel = require("rollup-plugin-babel")
var gulp = require("gulp")
var log4js = require("log4js")
var logger = log4js.getLogger("gulpfile")
var version = process.env.VERSION || require('./package.json').version
var banner =
    '/*!\n' +
    ' * wheel.js v' + version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' Rocky Wu\n' +
    ' * Released under the MIT License.\n' +
    ' */'

gulp.task("watch", function() {
    gulp.watch("./src/**/*.js",["dev"]);
});
gulp.task("dev", function() {
    rollup.rollup({
        entry: './src/wheel.js',
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            commonjs({
                ignoreGlobal: true
            })
        ]
    }).catch(function(e) {
        logger.error(e);
    }).then(function(bundle) {
        bundle.write({
            format: 'umd',
            moduleName: 'Wheel',
            banner: banner,
            dest: 'test/wheel.umd.js'
        });
    });
});
gulp.task("normal", function() {
    rollup.rollup({
        entry: './src/wheel.js',
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            commonjs({
                ignoreGlobal: true
            })
        ]
    }).catch(function(e) {
        logger.error(e);
    }).then(function(bundle) {
        bundle.write({
            format: 'umd',
            moduleName: 'Wheel',
            banner: banner,
            dest: 'dist/wheel.umd.js'
        });
        bundle.write({
            format: 'iife',
            moduleName: 'Wheel',
            banner: banner,
            dest: 'dist/wheel.js'
        });
    });
});
gulp.task("package", function() {
    rollup.rollup({
        entry: './src/wheel.js',
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            commonjs({
                ignoreGlobal: true
            }),
            uglify({
                fromString: true,
                output: {
                    preamble: banner,
                    ascii_only: true
                }
            })
        ]
    }).catch(function(e) {
        logger.error(e);
    }).then(function(bundle) {
        bundle.write({
            format: 'umd',
            moduleName: 'Wheel',
            sourceMap: true,
            dest: 'dist/wheel.umd.min.js'
        });
        bundle.write({
            format: 'iife',
            moduleName: 'Wheel',
            sourceMap: true,
            dest: 'dist/wheel.min.js'
        });
    }).catch(function(e) {
        logger.error(e);
    })
});
gulp.task('default', ['normal', 'package']);
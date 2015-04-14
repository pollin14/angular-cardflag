/* jslint node: true */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/angular-cardflag.min.js': ['src/angular-cardflag.js']
                }
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            targets: ['Gruntfile.js','src/**/*']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify']);
};
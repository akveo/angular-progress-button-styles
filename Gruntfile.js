module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'dist/angular-progress-button-styles.css': 'sass/progress-button-styles.scss'
                }
            }
        },
        less: {
            dist: {
                files: {
                    'dist/angular-progress-button-styles.css': 'less/progress-button-styles.less'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/angular-progress-button-styles.min.css': ['dist/angular-progress-button-styles.css']
                }
            }
        },
        uglify: {
            main: {
                files: {
                    'dist/angular-progress-button-styles.min.js': ['dist/angular-progress-button-styles.js']
                }
            }
        },
        copy: {
            js: {
                src: 'js/angular-progress-button-styles.js',
                dest: 'dist/angular-progress-button-styles.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('styles', ['sass:dist', 'cssmin']);

    grunt.registerTask('scripts', ['copy:js', 'uglify:main']);

    grunt.registerTask('default', ['scripts', 'styles']);

};
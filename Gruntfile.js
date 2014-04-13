'use strict';

module.exports = function(grunt) {
  //project configuration
  grunt.initConfig({
    //grunt-contrib-connect setting (web server)
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          keepalive: false,
          hostname: 'localhost',
          livereload: 'true'
        }
      }
    },
    esteWatch: {
      options: {
        dirs: ['app/**'],
        livereload: {
          enabled: true,
          extensions: ['html', 'js'],
          port: 35729
        }
      }
    }
  });

  //load tasks
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-este-watch');

  //defatul tasks
  grunt.registerTask('default', ['connect', 'esteWatch']);
};


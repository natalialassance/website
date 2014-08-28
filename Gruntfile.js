module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*
    cmq: {
        options: {
          log: false
        },
        your_target: {
          files: {
            'styles': ['styles/*.css']
          }
        }
      },
      */

    svgmin: {
      options: {
        plugins: [{
            removeViewBox: false
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
           src: ['**/*.svg'],
           dest: 'images/',
           ext: '.svg'
         }]
       }
     }

  });

  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['cmq', 'cssmin', 'svgmin']);
  grunt.registerTask('default', ['build']);

};
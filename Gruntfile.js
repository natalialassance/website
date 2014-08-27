module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cmq: {
        options: {
          log: false
        },
        your_target: {
          files: {
            'assets/styles/css': ['assets/styles/css/*.css']
          }
        }
      },

    svgmin: {
      options: {
        plugins: [{
            removeViewBox: false
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'img/src',
           src: ['**/*.svg'],
           dest: 'img/',
           ext: '.min.svg'
         }]
       }
     },


    cssmin: {
      add_banner: {
        options: {
          banner: '/* if you want to see the styles: http://github.com/natalialassance/natalialassance.github.io */'
        },
        files: {
          'styles/css/main.css': ['/styles/css/*.min.css']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['cmq', 'cssmin', 'svgmin']);
  grunt.registerTask('default', ['build']);

};
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.config('jshint', {
    files: [
      'Gruntfile.js',
      'src/lib/**/*.js',
      'src/index.js'
    ],
    options: {
      indent: 2,
      asi: false,
      loopfunc: false,
      eqeqeq: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      sub: true,
      undef: true,
      unused: true,
      eqnull: true,
      node: true,
      browser: true,
      globals: {
        // jQuery
        "$": false
        // Mocha
        // "describe"   : false,
        // "it"         : false,
        // "before"     : false,
        // "beforeEach" : false,
        // "after"      : false,
        // "afterEach"  : false
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.config('mochaTest', {
    scripts:[
      'src/test/**/*test.js'
    ],
    options: {
      reporter: 'spec'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.config('watch',{
    scripts: {
      files: '<%= jshint.files %>',
      tasks: ['jshint']
    },
    tests: {
      files: '<%= mochaTest.scripts %>',
      tasks: ['jshint', 'mochaTest']
    },
    options: {
      livereload: false
    }
  });

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['jshint', 'mochaTest']);
};

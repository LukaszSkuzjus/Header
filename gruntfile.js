module.exports = function(grunt) {

  //2. krok - konfiguracja task�w
  grunt.initConfig({

    jshint: {
        all: ['js/*.js']
    },
    sass: {
    	options: {
      		sourceMap: true
        },
        dist: {
        	files: {
        		'css/css.css': 'scss/scss.scss'
      }
    }
  },

  imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: 'images/build/'
        }]
    }
  },

  uglify: {
    my_target: {
    files: {
      'dest/output.min.js': 'js/*.js'
    }
    }
  },

   browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
	    "dest/*.js",
	    "images/build/*.{png,jpg,gif,svg}",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
             baseDir: "./"
          }
        }
      }
    },

  watch: {

	sass:{
        	files: ['scss/*.scss'],
        	tasks: ['sass'],
        	options: {
            		spawn: false,
            		livereload: true
        	},
    
	},
	imagemin: {
        	files: ['images/*.{png,jpg,gif,jpeg,svg}'],
        	tasks: ['imagemin'],
        	options: {
            		spawn: false,
			livereload: true
        	},
    	},

	jshint: {
        	files: ['js/*.js'],
        	tasks: ['jshint'],
        	options: {
            		spawn: false
			
        	},
    	},

	uglify: {
        	files: ['js/*.js'],
        	tasks: ['uglify'],
        	options: {
            		spawn: false,
			livereload: true
        	},
    	}
	


  }//koniec watch





  });

  // 1. krok -> �adowanie paczki z npm-a
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  



  // 3. W��czanie task�w
  grunt.registerTask('default', ["imagemin","jshint","sass","uglify","browserSync","watch"]);
};
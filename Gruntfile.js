
var fs = require('fs');

module.exports = function(grunt) {

	// collects all modules
	grunt.log.writeln('Running collector.');

	var dirs = fs.readdirSync('src/static/js/cz/'),i=0,l=dirs.length,files = [],modules = [],k,m;

	for (;i<l;i++) {
		//grunt.log.writeln('Processing dir "' + dirs[i] + '"');
		if (dirs[i].indexOf('.') !== -1) {
			//grunt.log.writeln('  ! rejecting dir "' + dirs[i] + '"');
			continue;
		}
		files = fs.readdirSync('src/static/js/cz/' + dirs[i]);
		for (k=0,m=files.length;k<m;k++) {
			if (files[k].charAt(0) === '.') {
				//grunt.log.writeln('  ! rejecting file "' + files[k] + '"');
				continue;
			} else {
				modules.push(dirs[i] + '/' + files[k].split('.')[0]);
				//grunt.log.writeln('  module found: "' + modules[(modules.length-1)] + '"');
			}
		}
	}

	// global modules variable will hold the found requirejs modules
	global['modules'] = modules;

	// Project configuration.
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		path:{
			'js':'src/static/js'
		},
		jshint:{
			options:{
				force:true,
				jshintrc:'.jshintrc'
			},
			all:[
				'<%=path.js %>/cz/**/*.js'
			]
		},
		csslint:{
			// needs to be configured
		},
		jekyll:{
			server:{
				src:'src',
				dest:'bin/_site',
				server:true,
				port:4000,
				watch:true,
				safe:true,
				config:'_config.yml'
			},
			build:{
				src:'src',
				dest:'bin/_site',
				config:'_config.yml'
			}
		},
		sass:{
			dev:{
				options: {
					style: 'nested'
				},
				files:{
					'src/static/css/styles.css':'src/static/sass/styles.scss',
					'src/static/css/print.css': 'src/static/sass/print.scss'
				}
			},
			dist:{
				options: {
					style: 'compressed'
				},
				files:{
					'src/static/css/styles.css':'src/static/sass/styles.scss',
					'src/static/css/print.css': 'src/static/sass/print.scss'
				}
			}
		},
		shell:{
			dyson:{
				command:'dyson ./rest',
				options: {
					stdout: true
				}
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd:'bin/_site/static/',src: '*/**', dest: 'dist/static'},
					{expand: true, cwd:'bin/_site/overview/',src: '*', dest: 'dist/html'}
				]
			}
		},
		uglify: {
			main: {
				expand: true,
				src:'**/*.js',
				dest:'dist/static/js.min',
				cwd:'dist/static/js'
			}
		},
		requirejs: {
			compile: {
				options: {
					optimize: 'uglify2',
					baseUrl: './src/static/js/cz',
					comments: '',
					out: './src/static/js.min/built.js',
					name: '../vendor/jrburke/require',
					preserveLicenseComments: false,
					generateSourceMaps: true,
					useSourceUrl: false,
					include:[
						'spinner',
						'parsley',
						'jquery',
						'domready',
						'modernizr',
						'conditioner',
						'moment'
					].concat(global['modules']),
					shim:{
						'parsley':['jquery'],
						'moment':'moment'
					},
					paths:{
						'parsley':'../vendor/guillaumepotier/parsley',
						'domready':'../vendor/jrburke/domready',
						'jquery':'../vendor/jquery/jquery',
						'modernizr':'../vendor/modernizr/modernizr-wrapper',
						'spinner':'../vendor/fgnass/spin.min',
						'conditioner':'../vendor/rschennink/conditioner',
						'moment':'../vendor/timrwood/moment',
						'pikaday':'../vendor/dbushell/pikaday'
					}
				}
			}
		},
		watch:{
			scripts:{
				files:['src/static/js/cz/**/*.js'],
				tasks:['jshint','requirejs']
			},
			styles:{
				files:['src/**/*.scss'],
				tasks:['sass:dev'],
				options: {
					livereload: true
				}
			}
		},
		concurrent: {
			server: {
				tasks:[
					'watch:scripts',
					'watch:styles',
					'jekyll:server',
					'shell:dyson'
				],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-concurrent');

	// register the tasks
	grunt.registerTask('server',['concurrent:server']);
	grunt.registerTask('default', ['jshint','sass:dev','jekyll:build']);
	grunt.registerTask('release', ['jshint','requirejs','sass:dist','jekyll:build','uglify:main', 'copy']);

};

module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**", '!bin/**'],
                options: {
                    module: 'commonjs'
                }
            }
        },
        clean: {
            all: ['**/*.js', '**/*.js.map', '!node_modules/**', '!Gruntfile.js', '!bin/**', 'test/**/*.js', 'test/**/*.js.map']
        },
	    wiredep: {
            task: {
                src: [
                    'app/web/index.html'
                ],
                
                options: {}
            }
        },
        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
    });
    
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.task.registerTask('test', ['karma:unit']);
};

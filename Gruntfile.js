module.exports = function(grunt) {
    grunt.initConfig({
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
    
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.task.registerTask('test', ['karma:unit']);
};

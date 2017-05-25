/**
* Grunt commands
*/

"use strict";

module.exports = function(grunt) {

    // Load grunt tasks
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-wiredep');

    // Specify the grunt tasks
    grunt.initConfig({
        // Express JS server configuration
        nodemon: {
            dev: {
                options: {
                    script: "server.js",
                    options: {
                        callback: function(nodemon) {
                            console.log("Starting node server...");
                        },
                        env: {
                            PORT: "3000"
                        }
                    }
                }
            }
        },

        // Automatically inject bower components to the app
        wiredep: {
            app: {
                src: [ "app/index.html" ]
            }
        }
    });

    grunt.registerTask("inject", [
        "wiredep"
    ]);

    grunt.registerTask("build", [
        "wiredep",
        "nodemon"
    ]);

};